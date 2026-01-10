<script lang="ts">
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { TwitchIcon } from '@hugeicons/core-free-icons';
</script>

<svelte:head>
	<title>Super Streamer Lobby</title>
</svelte:head>

<div class="mx-auto mb-8 flex min-h-100 w-11/12 flex-col items-center gap-2">
	<div
		class="flex flex-row items-center rounded-full border-2 border-dashed border-yellucent px-4 py-2 whitespace-nowrap"
	>
		<p class="bold flex items-center text-2xl">
			<span class="mx-2 text-yellow"> Gamemode Illustrations </span>
		</p>
	</div>
	<div class="flex w-full flex-row gap-2">
		<!-- SSL5 Split Squares -->
		<div class="group relative isolate flex aspect-video w-1/3 items-center justify-center">
			<enhanced:img
				class="absolute inset-0 -z-10 size-full object-contain group-hover:opacity-20"
				src="$lib/assets/ssl5-split.png?w=1280;640;400"
				alt="ssl5 split squares"
			/>
			<div
				class="flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100"
			>
				<p class="text-2xl font-bold text-yellow">SSL5 Split Squares</p>
			</div>
		</div>

		<!-- SSL5 Ghost and Ghoul -->
		<div class="group relative isolate flex aspect-video w-1/3 items-center justify-center">
			<enhanced:img
				class="absolute inset-0 -z-10 size-full object-contain group-hover:opacity-20"
				src="$lib/assets/ssl5-ghost.png?w=1280;640;400"
				alt="ssl5 ghost and ghoul"
			/>
			<div
				class="flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100"
			>
				<p class="text-2xl font-bold text-yellow">SSL5 Ghost and Ghoul</p>
			</div>
		</div>

		<!-- SSL4 Australian Mode -->
		<div class="group relative isolate flex aspect-video w-1/3 items-center justify-center">
			<enhanced:img
				class="absolute inset-0 -z-10 size-full object-contain group-hover:opacity-20"
				src="$lib/assets/ssl4-aussie.png?w=1280;640;400"
				alt="ssl4 australian mode"
			/>
			<div
				class="flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100"
			>
				<p class="text-2xl font-bold text-yellow">SSL4 Australian Mode</p>
			</div>
		</div>
	</div>

	<div
		class="mt-8 mb-4 flex flex-row items-center rounded-full border-2 border-dashed border-yellucent px-4 py-2 whitespace-nowrap"
	>
		<p class="bold flex items-center text-2xl">
			<span class="mx-2 text-yellow"> Contestant Prizes </span>
		</p>
	</div>

	<div
		class="mt-8 mb-4 flex flex-row items-center rounded-full border-2 border-dashed border-yellucent px-4 py-2 whitespace-nowrap"
	>
		<p class="bold flex items-center text-2xl">
			<span class="mx-2 text-yellow"> Event Merchandise </span>
		</p>
	</div>
</div>
