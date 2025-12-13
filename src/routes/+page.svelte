<script lang="ts">
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import {
		BlushBrush02FreeIcons,
		StarIcon,
		StarsIcon,
		FolderFavouriteIcon
	} from '@hugeicons/core-free-icons';

	import clsx from 'clsx';
	import { onMount } from 'svelte';

	const sectionNames: Record<string, string> = {
		intro: 'About',
		exp: 'Experience',
		comm: 'Commissions'
	};
	// make a variable to store which thing to show
	let sectionDisplay = $state('intro');
	let mobileMenu = $state(false);

	const experiences = [
		{
			id: 'ToyboxTumble',
			name: 'Toybox Tumble',
			role: 'Creative & Design Director',
			date: 'May 2025 - Present'
		},
		{
			id: 'DPCP',
			name: 'DupCup (TETR.IO)',
			role: 'Event Aesthetic & Promotional Artist',
			date: 'Feb 2025 - Present'
		},
		{
			id: 'SSL',
			name: 'Super Streamer Lobby (TETR.IO)',
			role: 'Gamemode & Merchandise Illustrator',
			date: 'Apr 2024 - Present'
		},
		{
			id: 'Freelance',
			name: 'Freelance Multidisciplinary Artist',
			role: 'Illustrator, Animator & Visual Designer',
			date: 'May 2023 - Present'
		},
		{
			id: 'Intern1',
			name: 'Lucky Mall MY',
			role: 'Graphic Design Intern',
			date: 'Sept 2025 - Dec 2025'
		},
		{
			id: 'Diploma',
			name: 'Asia Pacific University of Technology and Innovation',
			role: 'Diploma in Media and Design (Animation)',
			date: 'Aug 2023 - Aug 2025'
		}
	];
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
				sectionDisplay == 'exp' ? 'text-pinklucent' : 'text-pale hover:text-pink'
			])}
			onclick={() => {
				sectionDisplay = 'exp';
			}}
			>{sectionNames['exp']}<HugeiconsIcon
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

	<div class="flex min-h-85 items-start justify-center w-full">
		{#if sectionDisplay == 'intro'}
			<p class="mx-auto w-11/12">
				stuff about reii stuff about reii stuff about reii stuff about reii stuff about reii stuff
				about reii stuff about reii stuff about reii stuff about reii stuff about reii stuff about
				reii stuff about reii stuff about reii stuff about reii
			</p>
		{:else if sectionDisplay == 'exp'}
			<div class="flex w-11/12 flex-col">
				{#each experiences as exp}
					<div id={exp.id} class="mb-4 flex flex-col">
						<div class="flex flex-row items-center">
							<p class="flex flex-col text-left whitespace-nowrap">
								<span class="text-2xl font-bold">{exp.name}</span>
								<span class="text-lg text-yellow">{exp.role}</span>
							</p>

							<hr class="mr-2 ml-8 w-full items-center border-dashed border-yellucent" />

							<p
								class="flex flex-row items-center justify-end gap-1 text-right whitespace-nowrap text-translucent italic"
							>
								<HugeiconsIcon icon={StarsIcon} size="15" strokeWidth={1} />
								{exp.date}
							</p>
						</div>
					</div>
				{/each}
			</div>
		{:else if sectionDisplay == 'comm'}
			<p class="mx-auto w-11/12">
				reii is broke reii is broke reii is broke reii is broke reii is broke reii is broke reii is
				broke reii is broke reii is broke reii is broke reii is broke reii is broke reii is broke
				reii is broke reii is broke reii is broke reii is broke reii is broke
			</p>
		{/if}
	</div>
</div>
