<template>
	<div id="cam-container" class="relative">
		<div v-if="loading" class="flex flex-col justify-center items-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
			<LoadingBar :loading="true" class="m-5" />
			<p class="font-mitr text-lg">
				{{ loading_text }}
			</p>
		</div>
		<video id="input_video" ref="input_video" class="hidden" />
		<canvas id="output_canvas" ref="output_canvas" class="bg-gray-200 rounded-3xl m-0 max-w-full" width="640" height="360" />
		<!-- <Script type="text/partytown" src="http://localhost:3000/result.js" /> -->
	</div>
</template>

<script lang="ts">
// holistic -> word
// multihand -> char
import { Vue, Options } from "vue-class-component";
import {
	Holistic,
	POSE_CONNECTIONS,
	FACEMESH_TESSELATION,
	HAND_CONNECTIONS,
	Results,
	FACEMESH_FACE_OVAL,
	FACEMESH_LEFT_EYE,
	FACEMESH_LEFT_EYEBROW,
	FACEMESH_LIPS,
	FACEMESH_RIGHT_EYE,
	FACEMESH_RIGHT_EYEBROW,
	POSE_LANDMARKS_LEFT,
	POSE_LANDMARKS_RIGHT,
} from "@mediapipe/holistic";
import { Camera } from "@mediapipe/camera_utils";
import { drawLandmarks, drawConnectors, Data, lerp } from "@mediapipe/drawing_utils";

@Options({})
export default class HolisticCanvas extends Vue {
	loading = true;
	loading_text = "Initiating . . .";
	camera = null as Camera | null;
	started = false;

	async mounted() {
		const videoElement = this.$refs.input_video as HTMLVideoElement;
		const canvasElement = this.$refs.output_canvas as HTMLCanvasElement;
		const canvasCtx = canvasElement.getContext("2d");

		const holistic = new Holistic({
			locateFile: file => {
				return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`;
			},
		});
		holistic.setOptions({
			modelComplexity: 1,
			smoothLandmarks: true,
			enableSegmentation: false,
			smoothSegmentation: true,
			refineFaceLandmarks: false,
			minDetectionConfidence: 0.5,
			minTrackingConfidence: 0.5,
			selfieMode: true,
		});
		// holistic.onResults((results) => Result(results, canvasElement, canvasCtx, this));

		this.camera = new Camera(videoElement, {
			onFrame: async () => {
				await holistic.send({ image: videoElement });
			},
			width: 1280,
			height: 720,
		});

		this.loading_text = "Loading resources . . .";
		await holistic.initialize();

		try {
			this.loading_text = "Opening camera . . .";
			await this.camera.start();
			console.log("started");
			this.loading_text = "Starting . . .";
		} catch (err) {
			this.loading_text = "Cannot open camera";
			// this.$toast.error("Please allow permission to camera", {
			// 	position: "bottom-right",
			// 	duration: 5000,
			// 	iconPack: "fontawesome",
			// 	icon: "camera",
			// 	containerClass: "toast",
			// });
		}
	}

	beforeDestroy() {
		if (this.camera) {
			console.log("Destroying camera");
			this.camera.stop();
		}
	}
}
</script>
