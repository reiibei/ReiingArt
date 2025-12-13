<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	import { page } from '$app/state';
	import { slide } from 'svelte/transition';

	import clsx from 'clsx';

	import { HugeiconsIcon } from '@hugeicons/svelte';
	import {
		TwitchFreeIcons,
		DiscordFreeIcons,
		TwitterFreeIcons,
		BlueskyFreeIcons,
		InstagramFreeIcons
	} from '@hugeicons/core-free-icons';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="flex flex-col items-center justify-center p-1 text-center">
	{#if page.route.id == '/'}
		<div transition:slide={{ axis: 'y', duration: 500 }} class="flex flex-row items-center gap-6">
			<div class="flex flex-col">
				<p class="font-boom text-2xl">Hey, I'm Reii!</p>
				<p>Visual Storyteller | Part-Time Streamer</p>
				<p class="text-sm text-translucent">༻ a little cosy and a whole lotta chaos ༺</p>
			</div>
			<img
				src="https://i.imgur.com/YcDK5ZD.png"
				class="aspect-square size-20 rounded-full object-cover"
				alt="reii"
			/>
		</div>
	{/if}
	<div class="mt-2 flex flex-row gap-2">
		<a
			href="/"
			class={clsx([
				'w-20 cursor-pointer rounded-3xl border-2 border-solid p-1.5 text-center hover:border-pink hover:text-pink',
				page.route.id == '/' ? 'border-pink text-pink' : 'border-pale '
			])}>Home</a
		>
		<a
			href="/portfolio"
			class={clsx([
				'w-20 cursor-pointer rounded-3xl border-2 border-solid p-1.5 text-center hover:border-pink hover:text-pink',
				page.route.id == '/portfolio' ? 'border-pink text-pink' : 'border-pale '
			])}>Portfolio</a
		>
	</div>
</header>

<hr class="mx-auto my-4 w-11/12 border-translucent" />

{@render children()}

<hr class="mx-auto my-4 w-11/12 border-translucent" />

<footer class="mx-auto flex w-11/12 flex-row items-center justify-center gap-10">
	<div class="flex flex-col items-center justify-center gap-1">
		<div class="flex flex-row gap-2">
			<a
				href="https://twitch.tv/reiibei"
				class="flex size-10 items-center justify-center rounded-full border-2 border-dashed p-1.75 hover:scale-110 hover:text-pink"
			>
				<HugeiconsIcon icon={TwitchFreeIcons} size="fit" strokeWidth={1.5} />
			</a>
			<a
				href="https://discord.com/invite/rQudKfzSZT"
				class="flex size-10 items-center justify-center rounded-full border-2 border-dashed p-1.75 hover:scale-110 hover:text-pink"
				target="_blank"
			>
				<HugeiconsIcon icon={DiscordFreeIcons} size="fit" strokeWidth={1.5} />
			</a>
			<a
				href="https://bsky.app/profile/reiing.art"
				class="flex size-10 items-center justify-center rounded-full border-2 border-dashed p-1.75 hover:scale-110 hover:text-pink"
				target="_blank"
			>
				<HugeiconsIcon icon={BlueskyFreeIcons} size="fit" strokeWidth={1.5} />
			</a>
			<a
				href="https://x.com/reiingart"
				class="flex size-10 items-center justify-center rounded-full border-2 border-dashed p-1.75 hover:scale-110 hover:text-pink"
				target="_blank"
			>
				<HugeiconsIcon icon={TwitterFreeIcons} size="fit" strokeWidth={1.5} />
			</a>
			<a
				href="https://instagram.com/reiingart"
				class="flex size-10 items-center justify-center rounded-full border-2 border-dashed p-1.75 hover:scale-110 hover:text-pink"
				target="_blank"
			>
				<HugeiconsIcon icon={InstagramFreeIcons} size="fit" strokeWidth={1.5} />
			</a>
		</div>
		<p class="mt-0.5 flex text-lg whitespace-nowrap text-pink">
			Contact / 询问 ⊹ reiing.art@gmail.com
		</p>
	</div>

	<div class="text-center">
		<p>Copyright © 2025 ReiingArt</p>
		<p class="flex items-center justify-center text-xs whitespace-nowrap text-translucent italic">
			eternally cosy, embracing chaos
		</p>
	</div>
</footer>
