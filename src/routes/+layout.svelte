<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import {
		DiscordFreeIcons,
		TwitchFreeIcons,
		YoutubeFreeIcons,
		TwitterFreeIcons,
		BlueskyFreeIcons,
		InstagramFreeIcons,
		KoFiFreeIcons
	} from '@hugeicons/core-free-icons';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="font-mochi">
	<p class="text-2xl">Aphra (Reii) Ng</p>
	<p class="text-md">Visual Storyteller & Designer | Part-Time ReiiBei</p>
	<p class="text-sm">Drafting dreams into reality</p>
</header>
<p>this is a line thingy</p>

{@render children()}

<p>this is a line thingy</p>
<footer>
	<p class="font-lato">fancy text about ip</p>
	<div class="flex flex-col">
		<div class="flex flex-row items-center justify-center">
			<a
				href="https://reiing.art"
				class="m-1 flex size-12 items-center justify-center rounded-full border-3 border-pink p-1.5 text-pink"
				target="_blank"
			>
				<HugeiconsIcon icon={DiscordFreeIcons} size="fit" strokeWidth={1.5} />
			</a>
			<a
				href="https://reiing.art"
				class="m-1 flex size-12 items-center justify-center rounded-full border-3 border-pink p-1.5 text-pink"
				target="_blank"
			>
				<HugeiconsIcon icon={TwitchFreeIcons} size="fit" strokeWidth={1.5} />
			</a>
			<a
				href="https://reiing.art"
				class="m-1 flex size-12 items-center justify-center rounded-full border-3 border-pink p-1.5 text-pink"
				target="_blank"
			>
				<HugeiconsIcon icon={YoutubeFreeIcons} size="fit" strokeWidth={1.5} />
			</a>
			<!-- <a
				href="https://reiing.art"
				class="m-1 flex size-12 items-center justify-center rounded-full border-3 border-pink p-1.5 text-pink"
				target="_blank"
			>
				<HugeiconsIcon icon={TwitterFreeIcons} size="fit" strokeWidth={1.5} />
			</a> -->
			<a
				href="https://reiing.art"
				class="m-1 flex size-12 items-center justify-center rounded-full border-3 border-pink p-1.5 text-pink"
				target="_blank"
			>
				<HugeiconsIcon icon={BlueskyFreeIcons} size="fit" strokeWidth={1.5} />
			</a>
			<!-- <a
				href="https://reiing.art"
				class="m-1 flex size-12 items-center justify-center rounded-full border-3 border-pink p-1.5 text-pink"
				target="_blank"
			>
				<HugeiconsIcon icon={InstagramFreeIcons} size="fit" strokeWidth={1.5} />
			</a> -->
			<a
				href="https://ko-fi.com/reiingart"
				class="m-1 flex size-12 items-center justify-center rounded-full border-3 border-pink p-1.5 text-pink"
				target="_blank"
			>
				<HugeiconsIcon icon={KoFiFreeIcons} size="fit" strokeWidth={1.5} />
			</a>
		</div>
	</div>
</footer>
