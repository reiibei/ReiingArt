<script>
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import {
		YoutubeIcon,
		StarsIcon,
		TimeQuarterPassIcon,
		Time04Icon
	} from '@hugeicons/core-free-icons';

	const current = [
		{
			id: 'WBB',
			name: "Wylie's Blitz Battle",
			role: '2D Game Artist & Animator',
			date: 'Jan 2026 - Present'
		},
		{
			id: 'ToyboxTumble',
			name: 'Toybox Tumble',
			role: 'Creative & Design Director',
			date: 'May 2025 - Present'
		},
		{
			id: 'Freelance',
			name: 'Freelance Multidisciplinary Artist',
			role: 'Illustrator, Animator & Visual Designer',
			date: 'May 2023 - Present'
		}
	];

	const complete = [
		{
			id: 'Poxial-2',
			name: 'Poxial [YouTube]',
			role: 'Thumbnail Asset Artist',
			date: 'Dec 2025 - Jan 2026'
		},
		{
			id: 'DPCP',
			name: 'DupCup [TETR.IO]',
			role: 'Event Aesthetic & Promotional Artist',
			date: 'Feb 2025 - Jan 2026'
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
		},
		{
			id: 'SSL',
			name: 'Super Streamer Lobby [TETR.IO]',
			role: 'Gamemode & Merchandise Illustrator',
			date: 'Apr 2024 - Oct 2024'
		},

		{
			id: 'Poxial-1',
			name: 'Poxial [YouTube]',
			role: 'Emoticon & Badge Artist',
			date: 'Jan 2023 - Oct 2024'
		}
	];
</script>

<div class="flex min-h-100 w-full items-start justify-center">
	<div class="flex w-11/12 flex-col">
		<div class="mb-2 flex flex-row items-center justify-center text-translucent">
			<HugeiconsIcon icon={TimeQuarterPassIcon} size="20" strokeWidth={1} />
			<p class="mx-2 whitespace-nowrap italic">IN PROGRESS</p>
		</div>

		{#each current as cur}
			<div id={cur.id} class="mb-3 flex flex-col">
				<div class="flex flex-row items-center">
					<p class="flex flex-col text-left whitespace-nowrap">
						<span class="text-2xl font-bold">{cur.name}</span>
						<span class="text-lg text-yellow">{cur.role}</span>
					</p>

					<hr class="mr-2 ml-8 w-full items-center border-dashed border-yellucent" />

					<p
						class="flex flex-row items-center justify-end gap-1 text-right whitespace-nowrap text-translucent italic"
					>
						<HugeiconsIcon icon={StarsIcon} size="15" strokeWidth={1} />
						{cur.date}
					</p>
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
					<p class="flex flex-col text-left whitespace-nowrap">
						<span class="text-2xl font-bold">{com.name}</span>
						<span class="text-lg text-yellow">{com.role}</span>
					</p>

					<hr class="mr-2 ml-8 w-full items-center border-dashed border-yellucent" />

					<p
						class="flex flex-row items-center justify-end gap-1 text-right whitespace-nowrap text-translucent italic"
					>
						<HugeiconsIcon icon={StarsIcon} size="15" strokeWidth={1} />
						{com.date}
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>
