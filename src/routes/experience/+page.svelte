<script>
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import {
		StarsIcon,
		TimeQuarterPassIcon,
		Time04Icon,
		FolderFavouriteIcon
	} from '@hugeicons/core-free-icons';

	const current = [
		{
			id: 'WBB',
			role: "Wylie's Blitz Battle",
			name: '2D Game Artist & Animator',
			date: 'Jan 2026 - Present',
			link: '',
			target: '',
			cursor: 'default'
		},
		{
			id: 'ToyboxTumble',
			role: 'Toybox Tumble',
			name: 'Creative & Design Director',
			date: 'May 2025 - Present',
			link: '',
			target: '',
			cursor: 'pointer'
		},
		{
			id: 'Freelance',
			role: 'Freelance Multidisciplinary Artist',
			name: 'Illustrator, Animator, Visual Designer',
			date: 'May 2023 - Present',
			link: '',
			target: ''
		}
	];

	const complete = [
		{
			id: 'DPCP',
			role: 'DupCup [TETR.IO]',
			name: 'Event Aesthetic & Promotional Artist',
			date: 'Feb 2025 - Jan 2026',
			link: '/dpcp',
			target: ''
		},
		{
			id: 'Intern1',
			role: 'Lucky Mall MY',
			name: 'Graphic Design Intern',
			date: 'Sept 2025 - Dec 2025'
		},
		{
			id: 'Diploma',
			role: 'Asia Pacific University of Innovation and Technology',
			name: 'Diploma in Media and Design (Animation)',
			date: 'Aug 2023 - Aug 2025'
		},
		{
			id: 'SSL',
			role: 'Super Streamer Lobby [TETR.IO]',
			name: 'Gamemode & Merchandise Illustrator',
			date: 'Apr 2024 - Oct 2024',
			link: '/ssl',
			target: ''
		}
	];
</script>

<svelte:head>
	<title>Reii | Experience</title>
</svelte:head>

<div class="mb-8 flex min-h-100 w-full items-start justify-center">
	<div class="flex w-11/12 flex-col">
		<div class="mb-2 flex flex-row items-center justify-center text-translucent">
			<HugeiconsIcon icon={TimeQuarterPassIcon} size="20" strokeWidth={1} />
			<p class="mx-2 whitespace-nowrap italic">IN PROGRESS</p>
		</div>

		{#each current as cur}
			<div id={cur.id} class="mb-3 flex flex-col">
				<div class="flex flex-row items-center">
					{#if cur.link}
						<a href={cur.link} target={cur.target} class="w-full">
							<p class="flex flex-col text-left whitespace-nowrap">
								<span class="flex flex-row items-center gap-2 text-2xl font-bold"
									><HugeiconsIcon
										icon={FolderFavouriteIcon}
										size="20"
										strokeWidth={2}
									/>{cur.name}</span
								>
								<span class="text-yellow">{cur.role}</span>
							</p>

							<hr class="items-center border-dotted border-translucent" />

							<p
								class="flex flex-row items-center justify-end gap-1 text-right whitespace-nowrap text-translucent italic"
							>
								<HugeiconsIcon icon={StarsIcon} size="15" strokeWidth={1} />
								{cur.date}
							</p>
						</a>
					{:else}
						<div class="w-full">
							<p class="flex flex-col text-left whitespace-nowrap">
								<span class="text-2xl font-bold">{cur.name}</span>
								<span class="text-yellow">{cur.role}</span>
							</p>

							<hr class="items-center border-dotted border-translucent" />

							<p
								class="flex flex-row items-center justify-end gap-1 text-right whitespace-nowrap text-translucent italic"
							>
								<HugeiconsIcon icon={StarsIcon} size="15" strokeWidth={1} />
								{cur.date}
							</p>
						</div>
					{/if}
				</div>
			</div>
		{/each}

		<div class="my-2 flex flex-row items-center justify-center text-translucent">
			<HugeiconsIcon icon={Time04Icon} size="20" strokeWidth={1} />
			<p class="mx-2 whitespace-nowrap italic">COMPLETED</p>
		</div>

		{#each complete as com}
			<div id={com.id} class="mb-3 flex flex-col">
				<div class="flex flex-row items-center">
					{#if com.link}
						<a href={com.link} target={com.target} class="w-full">
							<p class="flex flex-col text-left whitespace-nowrap">
								<span class="flex flex-row items-center gap-2 text-2xl font-bold"
									><HugeiconsIcon
										icon={FolderFavouriteIcon}
										size="20"
										strokeWidth={2}
									/>{com.name}</span
								>
								<span class="text-yellow">{com.role}</span>
							</p>

							<hr class="items-center border-dotted border-translucent" />

							<p
								class="flex flex-row items-center justify-end gap-1 text-right whitespace-nowrap text-translucent italic"
							>
								<HugeiconsIcon icon={StarsIcon} size="15" strokeWidth={1} />
								{com.date}
							</p>
						</a>
					{:else}
						<div class="w-full">
							<p class="flex flex-col text-left whitespace-nowrap">
								<span class="text-2xl font-bold">{com.name}</span>
								<span class="text-yellow">{com.role}</span>
							</p>

							<hr class="items-center border-dotted border-translucent" />

							<p
								class="flex flex-row items-center justify-end gap-1 text-right whitespace-nowrap text-translucent italic"
							>
								<HugeiconsIcon icon={StarsIcon} size="15" strokeWidth={1} />
								{com.date}
							</p>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>
