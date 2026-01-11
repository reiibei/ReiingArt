<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Logo from '$lib/components/Logo.svelte';

	import { page } from '$app/state';
	import { slide } from 'svelte/transition';

	import clsx from 'clsx';

	import { HugeiconsIcon } from '@hugeicons/svelte';
	import {
		StarIcon,
		QuillWrite01Icon,
		StickyNote02Icon,
		BlushBrush02Icon,
		FolderFavouriteIcon,
		MoneySavingJarIcon,
		TwitchIcon,
		DiscordIcon,
		BlueskyIcon,
		InstagramIcon
	} from '@hugeicons/core-free-icons';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="flex flex-col items-center justify-center p-1 text-center">
	{#if page.route.id == '/'}
		<div transition:slide={{ axis: 'y', duration: 500 }} class="flex flex-row items-center gap-3">
			<Logo class="size-25" />

			<div class="flex flex-col whitespace-nowrap">
				<p class="font-boom text-2xl text-pale">Hey, I'm <span class="text-pink">Reii</span>!</p>
				<p class="text-sm text-translucent">Visual Storyteller | Part-Time Streamer</p>
				<!-- <p class="text-sm text-translucent">༻ a little cosy and a whole lotta chaos ༺</p> -->
			</div>
		</div>
	{/if}
	<div class="mt-2 flex flex-row gap-2">
		<a
			href="/"
			class={clsx([
				'group flex w-28 cursor-pointer items-center justify-center gap-1 rounded-3xl border-2 border-solid p-1.5 text-center hover:border-pink hover:text-pink',
				page.route.id == '/' ? 'border-pinklucent text-pale' : 'border-translucent '
			])}
			><span class="text-yellow group-hover:text-pink"
				><HugeiconsIcon icon={StarIcon} size="15" strokeWidth={1.5} /></span
			> About</a
		>
		<!-- <a
			href="/blog"
			class={clsx([
				'group flex w-28 cursor-pointer items-center justify-center gap-1 rounded-3xl border-2 border-solid p-1.5 text-center hover:border-pink hover:text-pink',
				page.route.id == '/blog' ? 'border-pinklucent text-pale' : 'border-translucent '
			])}
			><span class="text-yellow group-hover:text-pink"
				><HugeiconsIcon icon={QuillWrite01Icon} size="15" strokeWidth={1.5} /></span
			> Blog</a
		> -->
		<a
			href="/experience"
			class={clsx([
				'group flex w-28 cursor-pointer items-center justify-center gap-1 rounded-3xl border-2 border-solid p-1.5 text-center hover:border-pink hover:text-pink',
				page.route.id == '/experience' ? 'border-pinklucent text-pale' : 'border-translucent '
			])}
			><span class="text-yellow group-hover:text-pink"
				><HugeiconsIcon icon={StickyNote02Icon} size="15" strokeWidth={1.5} /></span
			>Experience</a
		>
		<a
			href="/portfolio"
			class={clsx([
				'group flex w-28 cursor-pointer items-center justify-center gap-1 rounded-3xl border-2 border-solid p-1.5 text-center hover:border-pink hover:text-pink',
				page.route.id == '/portfolio' ? 'border-pinklucent text-pale' : 'border-translucent '
			])}
			><span class="text-yellow group-hover:text-pink"
				><HugeiconsIcon icon={BlushBrush02Icon} size="15" strokeWidth={1.5} /></span
			> Portfolio</a
		>
		<a
			href="/project"
			class={clsx([
				'group flex w-28 cursor-pointer items-center justify-center gap-1 rounded-3xl border-2 border-solid p-1.5 text-center hover:border-pink hover:text-pink',
				page.route.id == '/project' ? 'border-pinklucent text-pale' : 'border-translucent '
			])}
			><span class="text-yellow group-hover:text-pink"
				><HugeiconsIcon icon={FolderFavouriteIcon} size="15" strokeWidth={1.5} /></span
			> Project</a
		>
		<!-- <a
			href="/pricing"
			class={clsx([
				'group flex w-28 cursor-pointer items-center justify-center gap-1 rounded-3xl border-2 border-solid p-1.5 text-center hover:border-pink hover:text-pink',
				page.route.id == '/pricing' ? 'border-pinklucent text-pale' : 'border-translucent '
			])}
			><span class="text-yellow group-hover:text-pink"
				><HugeiconsIcon icon={MoneySavingJarIcon} size="15" strokeWidth={1.5} /></span
			>Pricing</a
		> -->
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
				<HugeiconsIcon icon={TwitchIcon} size="fit" strokeWidth={1.5} />
			</a>
			<a
				href="https://discord.com/invite/rQudKfzSZT"
				class="flex size-10 items-center justify-center rounded-full border-2 border-dashed p-1.75 hover:scale-110 hover:text-pink"
				target="_blank"
			>
				<HugeiconsIcon icon={DiscordIcon} size="fit" strokeWidth={1.5} />
			</a>
			<a
				href="https://bsky.app/profile/reiing.art"
				class="flex size-10 items-center justify-center rounded-full border-2 border-dashed p-1.75 hover:scale-110 hover:text-pink"
				target="_blank"
			>
				<HugeiconsIcon icon={BlueskyIcon} size="fit" strokeWidth={1.5} />
			</a>
			<a
				href="https://instagram.com/reiingart"
				class="flex size-10 items-center justify-center rounded-full border-2 border-dashed p-1.75 hover:scale-110 hover:text-pink"
				target="_blank"
			>
				<HugeiconsIcon icon={InstagramIcon} size="fit" strokeWidth={1.5} />
			</a>
		</div>
		<p class="mt-0.5 flex text-lg whitespace-nowrap text-pink">
			Contact / 询问 ⊹ reiing.art@gmail.com
		</p>
	</div>

	<div class="text-center">
		<p>Copyright © 2025 ReiingArt</p>
		<p class="flex items-center justify-center text-xs whitespace-nowrap text-translucent italic">
			༻ a little cosy and a whole lotta chaos ༺
		</p>
	</div>
</footer>
