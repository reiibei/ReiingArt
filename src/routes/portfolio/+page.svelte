<script lang="ts">
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import {
		TwitchIcon,
		YoutubeIcon,
		FolderFavouriteIcon,
		GameController03Icon,
		Cards01Icon
	} from '@hugeicons/core-free-icons';
</script>

<svelte:head>
	<title>Reii | Portfolio</title>
</svelte:head>

<div class="mx-auto mb-8 flex w-11/12 flex-col items-center gap-2">
	<!-- aquarium date -->
	<div class="group relative isolate flex aspect-6/1 w-full items-center justify-center">
		<!-- width = 3 sizes -->
		<enhanced:img
			class="absolute inset-0 -z-10 size-full object-contain group-hover:opacity-20"
			src="$lib/assets/aquarium-date.jpg?w=1280;640;400"
			alt="aquarium date"
		/>
		<div class="flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
			<p class="text-2xl font-bold text-yellow">AQUARIUM DATE</p>
			<div class="flex w-11/12 flex-col items-center justify-center text-center whitespace-nowrap">
				<p>One of my largest pieces by far</p>
				<p>15,000×2,500 of details and care (๑ &gt; ᴗ &lt; ๑)</p>
			</div>
			<div class="flex flex-row items-center justify-center gap-1">
				<a
					href="https://www.twitch.tv/dufduf22"
					target="_blank"
					class="flex flex-row items-center justify-center gap-1 rounded-full border-2 border-translucent px-2 hover:border-pinklucent hover:text-pink"
					><HugeiconsIcon icon={TwitchIcon} size="18" strokeWidth={1.5} />dufduf22</a
				>
			</div>
		</div>
	</div>

	<div class="flex w-full flex-row gap-2">
		<!-- poxmotes -->
		<div class="group relative isolate flex aspect-square w-1/5 items-center justify-center">
			<enhanced:img
				class="absolute inset-0 -z-10 size-full object-contain group-hover:opacity-20"
				src="$lib/assets/poxmotes.png?w=1280;640;400"
				alt="poxmotes"
			/>
			<div
				class="flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100"
			>
				<p class="text-2xl font-bold text-yellow">Poxmotes</p>
				<div class="flex w-11/12 flex-col items-center justify-center text-center">
					<p class="whitespace-nowrap">Discord, YouTube & Twitch</p>
					<p>compatible ദ്ദി(｡•̀ ᗜ&lt;)</p>
				</div>
				<div class="flex flex-row items-center justify-center gap-1">
					<a
						href="https://www.youtube.com/@Poxial"
						target="_blank"
						class="flex flex-row items-center justify-center gap-1 rounded-full border-2 border-translucent px-2 hover:border-pinklucent hover:text-pink"
						><HugeiconsIcon icon={YoutubeIcon} size="18" strokeWidth={1.5} />Poxial</a
					>
				</div>
			</div>
		</div>

		<!-- poxial zz -->
		<div class="group relative isolate flex aspect-square w-1/5 items-center justify-center">
			<enhanced:img
				class="absolute inset-0 -z-10 size-full object-contain group-hover:opacity-20"
				src="$lib/assets/poxial-zz.png?w=1280;640;400"
				alt="poxial zz"
			/>
			<div
				class="flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100"
			>
				<p class="text-2xl font-bold text-yellow">Sleeping Poxial</p>
				<div
					class="flex w-11/12 flex-col items-center justify-center text-center whitespace-nowrap"
				>
					<p>Two angles, two styles!</p>
					<p>Full-body, thumbnail-ready assets</p>
				</div>
				<div class="flex flex-row items-center justify-center gap-1">
					<a
						href="https://www.youtube.com/@Poxial"
						target="_blank"
						class="flex flex-row items-center justify-center gap-1 rounded-full border-2 border-translucent px-2 hover:border-pinklucent hover:text-pink"
						><HugeiconsIcon icon={YoutubeIcon} size="18" strokeWidth={1.5} />Poxial</a
					>
				</div>
			</div>
		</div>

		<!-- PFP Teto Nom -->
		<div class="group relative isolate flex aspect-square w-1/5 items-center justify-center">
			<enhanced:img
				class="absolute inset-0 -z-10 size-full object-contain group-hover:opacity-20"
				src="$lib/assets/pfp-teto.png?w=1280;640;400"
				alt="teto nom"
			/>
			<div
				class="flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100"
			>
				<p class="text-2xl font-bold text-yellow">PFP: Teto Nom</p>
			</div>
		</div>

		<!-- PFP Mimikyu -->
		<div class="group relative isolate flex aspect-square w-1/5 items-center justify-center">
			<enhanced:img
				class="absolute inset-0 -z-10 size-full object-contain group-hover:opacity-20"
				src="$lib/assets/pfp-mimikyu.png?w=1280;640;400"
				alt="pfp mimikyu"
			/>
			<div
				class="flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100"
			>
				<p class="text-2xl font-bold text-yellow">PFP: Mimikyu</p>
			</div>
		</div>

		<!-- Teto Trio -->
		<div class="group relative isolate flex aspect-square w-1/5 items-center justify-center">
			<enhanced:img
				class="absolute inset-0 -z-10 size-full object-contain group-hover:opacity-20"
				src="$lib/assets/teto-trio.png?w=1280;640;400"
				alt="teto trio"
			/>
			<div
				class="flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100"
			>
				<p class="text-2xl font-bold text-yellow">Teto Trio</p>
			</div>
		</div>
	</div>

	<div class="flex w-full flex-row gap-2">
		<!-- DPCP V2 -->
		<div class="group relative isolate flex aspect-video w-1/3 items-center justify-center">
			<enhanced:img
				class="absolute inset-0 -z-10 size-full object-contain group-hover:opacity-20"
				src="$lib/assets/dpcp-still.png?w=1280;640;400"
				alt="DupCup"
			/>
			<div
				class="flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100"
			>
				<p class="text-2xl font-bold text-yellow">Misdrop City</p>
				<div
					class="flex w-11/12 flex-col items-center justify-center text-center whitespace-nowrap"
				>
					<p>Designed for Dubstep298's TETR.IO event, DupCup!</p>
				</div>
				<div class="flex flex-row items-center justify-center gap-1">
					<a
						href="https://www.twitch.tv/dubstep298"
						target="_blank"
						class="flex flex-row items-center justify-center gap-1 rounded-full border-2 border-translucent px-2 hover:border-pinklucent hover:text-pink"
						><HugeiconsIcon icon={TwitchIcon} size="18" strokeWidth={1.5} />Dubstep298</a
					>
					<a
						href="/dpcp"
						class="flex flex-row items-center justify-center gap-1 rounded-full border-2 border-translucent px-2 hover:border-pinklucent hover:text-pink"
						><HugeiconsIcon icon={FolderFavouriteIcon} size="18" strokeWidth={1.5} />Full Project</a
					>
				</div>
			</div>
		</div>

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
				<div
					class="flex w-11/12 flex-col items-center justify-center text-center whitespace-nowrap"
				>
					<p>gamemode illustration for TETR.IO event Super Streamer Lobby</p>
				</div>
				<div class="flex flex-row items-center justify-center gap-1">
					<a
						href="https://www.twitch.tv/wyliecanttwitch"
						target="_blank"
						class="flex flex-row items-center justify-center gap-1 rounded-full border-2 border-translucent px-2 hover:border-pinklucent hover:text-pink"
						><HugeiconsIcon icon={TwitchIcon} size="18" strokeWidth={1.5} />WylieCantTwitch</a
					>
					<a
						href="/ssl"
						class="flex flex-row items-center justify-center gap-1 rounded-full border-2 border-translucent px-2 hover:border-pinklucent hover:text-pink"
						><HugeiconsIcon icon={FolderFavouriteIcon} size="18" strokeWidth={1.5} />Full Project</a
					>
				</div>
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
				<div
					class="flex w-11/12 flex-col items-center justify-center text-center whitespace-nowrap"
				>
					<p>gamemode illustration for TETR.IO event Super Streamer Lobby</p>
				</div>
				<div class="flex flex-row items-center justify-center gap-1">
					<a
						href="https://www.twitch.tv/wyliecanttwitch"
						target="_blank"
						class="flex flex-row items-center justify-center gap-1 rounded-full border-2 border-translucent px-2 hover:border-pinklucent hover:text-pink"
						><HugeiconsIcon icon={TwitchIcon} size="18" strokeWidth={1.5} />WylieCantTwitch</a
					>
					<a
						href="/ssl"
						class="flex flex-row items-center justify-center gap-1 rounded-full border-2 border-translucent px-2 hover:border-pinklucent hover:text-pink"
						><HugeiconsIcon icon={FolderFavouriteIcon} size="18" strokeWidth={1.5} />Full Project</a
					>
				</div>
			</div>
		</div>
	</div>
</div>
