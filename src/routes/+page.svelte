<script lang="ts">
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import {
		BlushBrush02FreeIcons,
		StarIcon,
		FolderFavouriteIcon,
		Honey01FreeIcons
	} from '@hugeicons/core-free-icons';

	import clsx from 'clsx';
	import { onMount } from 'svelte';

	const sectionNames: Record<string, string> = {
		intro: 'About',
		prj: 'Projects',
		comm: 'Commissions'
	};
	// make a variable to store which thing to show
	let sectionDisplay = $state('intro');
	let mobileMenu = $state(false);
</script>

<svelte:head>
	<title>Hey, I'm Reii!</title>
</svelte:head>

<div class="flex flex-col items-center justify-center p-1 text-center">
	<div
		class={clsx(['noscrollbar mb-3 flex flex-row items-center justify-center text-xl font-bold'])}
	>
		<button
			class={clsx([
				'flex items-center gap-2 border-r-2 border-translucent px-2 whitespace-nowrap hover:cursor-pointer',
				sectionDisplay == 'intro' ? 'text-pinklucent' : 'text-pale hover:text-pink'
			])}
			onclick={() => {
				sectionDisplay = 'intro';
			}}
			>{sectionNames['intro']}
			<HugeiconsIcon icon={StarIcon} size="15" strokeWidth={2} /></button
		>
		<button
			class={clsx([
				'flex items-center gap-2 border-r-2 border-translucent px-2 whitespace-nowrap hover:cursor-pointer',
				sectionDisplay == 'prj' ? 'text-pinklucent' : 'text-pale hover:text-pink'
			])}
			onclick={() => {
				sectionDisplay = 'prj';
			}}
			>{sectionNames['prj']}<HugeiconsIcon
				icon={FolderFavouriteIcon}
				size="15"
				strokeWidth={2}
			/></button
		>
		<button
			class={clsx([
				'flex items-center gap-2 border-translucent px-2 whitespace-nowrap hover:cursor-pointer',
				sectionDisplay == 'comm' ? 'text-pinklucent' : 'text-pale hover:text-pink'
			])}
			onclick={() => {
				sectionDisplay = 'comm';
			}}
			>{sectionNames['comm']}<HugeiconsIcon
				icon={BlushBrush02FreeIcons}
				size="15"
				strokeWidth={2}
			/></button
		>
	</div>
	{#if sectionDisplay == 'intro'}
		<p class="mx-auto h-80 w-11/12">
			stuff about reii stuff about reii stuff about reii stuff about reii stuff about reii stuff
			about reii stuff about reii stuff about reii stuff about reii stuff about reii stuff about
			reii stuff about reii stuff about reii stuff about reii
		</p>
	{:else if sectionDisplay == 'prj'}
		<div class="flex h-80 w-11/12 flex-col">
			<div id="ToyboxTumble" class="mb-4 flex flex-col">
				<div class="flex flex-row items-center text-lg">
					<p class="flex justify-start whitespace-nowrap">Toybox Tumble</p>
					<hr class="mx-2 flex w-full border-dashed border-yellucent" />
					<p
						class="w-fit justify-center font-lato text-xs whitespace-nowrap text-translucent italic"
					>
						May 2025 - Present
					</p>
					<hr class="mx-2 flex w-full border-dashed border-yellucent" />
					<p class="flex justify-end whitespace-nowrap text-yellow">Design Director</p>
				</div>
			</div>

			<div id="DPCP" class="mb-4 flex flex-col">
				<div class="flex flex-row items-center text-lg">
					<p class="flex justify-start whitespace-nowrap">DupCup (TETR.IO)</p>
					<hr class="mx-2 flex w-full border-dashed border-yellucent" />
					<p
						class="w-fit justify-center font-lato text-xs whitespace-nowrap text-translucent italic"
					>
						Feb 2025 - Present
					</p>
					<hr class="mx-2 flex w-full border-dashed border-yellucent" />
					<p class="flex justify-end whitespace-nowrap text-yellow">
						Event Aesthetic & Promotional Artist
					</p>
				</div>
			</div>

			<div id="SSL" class="mb-4 flex flex-col">
				<div class="flex flex-row items-center text-lg">
					<p class="flex justify-start whitespace-nowrap">Super Streamer Lobby (TETR.IO)</p>
					<hr class="mx-2 flex justify-center border-dashed border-yellucent" />
					<p class="font-lato text-xs whitespace-nowrap text-translucent italic">
						Apr 2024 - Present
					</p>
					<hr class="mx-2 flex justify-center border-dashed border-yellucent" />
					<p class="flex justify-end whitespace-nowrap text-yellow">Gamemode Illustrator</p>
				</div>
			</div>
		</div>
	{:else if sectionDisplay == 'comm'}
		<p class="mx-auto h-80 w-11/12">
			reii is broke reii is broke reii is broke reii is broke reii is broke reii is broke reii is
			broke reii is broke reii is broke reii is broke reii is broke reii is broke reii is broke reii
			is broke reii is broke reii is broke reii is broke reii is broke
		</p>
	{/if}
</div>
