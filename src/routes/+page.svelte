<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="flex flex-col items-center justify-center h-full p-4">
	<video
		class="fixed inset-0 object-cover w-screen h-screen"
		playsInline
		autoPlay
		muted
		loop
		poster="/assets/coffee.jpg"
	>
		<source src="/assets/coffee.webm" type="video/webm" />
		<source src="/assets/coffee.mp4" type="video/mp4" />
	</video>

	<div class="fixed inset-0 w-screen h-screen opacity-50 bg-gray-900" />

	<div class="relative">
		<h1 class="text-4xl font-bold text-center uppercase md:text-6xl text-gray-100">Andrew Brey</h1>
		<h2 class="mt-2 text-2xl text-center md:mt-3 md:text-3xl text-gray-300">Software Developer</h2>
		<div class="grid grid-cols-2 gap-4 mt-12 sm:grid-cols-3 md:grid-cols-4">
			{#each data.links as l}
				<a
					href={l.link}
					target="_blank"
					rel="noopener noreferrer nofollow"
					class="px-3 py-1.5 rounded-full ring-2 ring-gray-100 uppercase text-sm text-center whitespace-nowrap truncate text-gray-100 bg-gray-200 bg-opacity-10 hover:bg-opacity-30 focus:bg-opacity-30 focus:outline-none focus:ring-offset-2"
				>
					{l.text}
				</a>
			{/each}
		</div>
	</div>
</main>
