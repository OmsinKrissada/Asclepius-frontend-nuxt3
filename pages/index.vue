<template>
	<div class="flex flex-col sm:flex-row justify-center items-center my-10">
		<div id="left" class="flex flex-col items-center">
			<p class="m-3 text-2xl" style="--order: 0">Welcome</p>
			<h2 id="name" class="m-3 font-mitr font-semibold text-blue text-6xl text-shadow-[-5px_3px_0px_#e2d36b]" style="--order: 1">ASCLEPIUS</h2>
			<img src="/logo.png" alt="logo" width="300" class="sm:hidden" />
			<p class="m-3" style="--order: 2">Easily communicate with person having hearing or speech disability.</p>
			<nuxt-link to="/camera" style="--order: 3" class="hover:-translate-y-3">
				<!-- shadow-[0_0_10px_rgba(0,0,0,0.2)] -->
				<button
					class="m-3 px-8 py-3 rounded-3xl hover:rounded-lg bg-turmeric font-fahkwang text-white shadow-xl shadow-amber-300/30 hover:shadow-yellow-600/40 hover:bg-yellow-600 transition-all"
				>
					TRANSLATE
				</button>
			</nuxt-link>
			<!-- <Card text="WebSocket disconnected" /> -->
		</div>
		<img src="/logo.png" alt="logo" class="hidden sm:block" />
	</div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
@Options({
	name: "IndexPage",
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
.toast {
	box-shadow: 0 1px 3px rgb(0 0 0 / 5%), rgb(0 0 0 / 5%) 0px 28px 23px -7px, rgb(0 0 0 / 4%) 0px 12px 12px -7px;
	background-color: black;
}

#left {
	* {
		opacity: 0;

		animation: dropIn 1s forwards;
		animation-delay: calc(var(--order) * 100ms);
	}
}

img {
	transform: translateY(0);
	animation: fadeIn 2s forwards;
}

@keyframes dropIn {
	0% {
		opacity: 0;
		transform: translateY(-100%);
	}
	100% {
		opacity: 1;
		transform: translateY(0px);
	}
}

@keyframes flyIn {
	0% {
		opacity: 0;
		transform: translateY(100%);
	}
	100% {
		opacity: 1;
		transform: translateY(0px);
	}
}

@keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
</style>
