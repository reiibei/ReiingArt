<script lang="ts">
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import {
		QuoteUpIcon,
		QuoteDownIcon,
		TwitchIcon,
		BlueskyIcon,
		SoftDrink02Icon,
		LoyaltyCardIcon
	} from '@hugeicons/core-free-icons';
</script>

<svelte:head>
	<title>Super Streamer Lobby</title>
</svelte:head>

<div class="mx-auto mb-8 flex w-11/12 flex-col items-center gap-2">
	<div
		class="flex flex-row justify-center gap-5 rounded-3xl border-4 border-dashed border-pink bg-pinklucent p-4"
	>
		<p class="flex justify-start">
			<HugeiconsIcon icon={QuoteUpIcon} size="23" strokeWidth={2.5} />
		</p>

		<p class="w-11/12 text-center text-2xl">
			One of the largest open-lobby events in TETR.IO. Super Streamer Lobby is a custom lobby where
			TETR.IO streamers and their viewers play side by side, featuring fun, wacky, never-before-seen
			custom game modes!
		</p>

		<p class="flex items-end justify-end">
			<HugeiconsIcon icon={QuoteDownIcon} size="23" strokeWidth={2.5} />
		</p>
	</div>

	<p class="bold mt-8 flex items-center text-2xl">
		<span class="mx-2 text-yellow"> Gamemode Illustration </span>
	</p>

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

		<!-- SSL4 Welcome Banner -->
		<div class="group relative isolate flex aspect-video w-1/3 items-center justify-center">
			<enhanced:img
				class="absolute inset-0 -z-10 size-full object-contain group-hover:opacity-20"
				src="$lib/assets/ssl4-welcome.jpg?w=1280;640;400"
				alt="ssl4 welcome"
			/>
			<div
				class="flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100"
			>
				<p class="text-2xl font-bold text-yellow">SSL4 Welcome Graphic</p>
				<div
					class="flex w-11/12 flex-col items-center justify-center text-center whitespace-nowrap"
				>
					<p class="mb-4 flex flex-row gap-1 italic">
						A collaboration piece with <a
							href="https://bsky.app/profile/amyhmlam.bsky.social"
							target="_blank"
							class="flex flex-row items-center gap-0.5 text-pink hover:underline"
							><HugeiconsIcon icon={BlueskyIcon} size="15" strokeWidth={1.5} />@amyhmlam</a
						>
					</p>
				</div>
			</div>
		</div>
	</div>

	<div class="flex w-full flex-row gap-2">
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

	<p class="bold mt-8 flex items-center text-2xl">
		<span class="mx-2 text-yellow">Contestant Prizes</span>
	</p>
	<div class="flex w-full flex-row gap-2">
		<!-- SSL4 Levhanni -->
		<div class="group relative isolate flex aspect-square w-1/4 items-center justify-center">
			<enhanced:img
				class="absolute inset-0 -z-10 size-full object-contain group-hover:opacity-20"
				src="$lib/assets/ssl4-levhanni.png?w=1280;640;400"
				alt="levhanni"
			/>
			<div
				class="flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100"
			>
				<p class="text-2xl font-bold text-yellow">SSL4</p>
				<div class="flex flex-row items-center justify-center gap-1">
					<a
						href="https://www.twitch.tv/levhanni"
						target="_blank"
						class="flex flex-row items-center justify-center gap-1 rounded-full border-2 border-translucent px-2 hover:border-pinklucent hover:text-pink"
						><HugeiconsIcon icon={TwitchIcon} size="18" strokeWidth={1.5} />Levhanni</a
					>
				</div>
			</div>
		</div>

		<!-- SSL4 Circle -->
		<div class="group relative isolate flex aspect-square w-1/4 items-center justify-center">
			<enhanced:img
				class="absolute inset-0 -z-10 size-full object-contain group-hover:opacity-20"
				src="$lib/assets/ssl4-circle.png?w=1280;640;400"
				alt="circle"
			/>
			<div
				class="flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100"
			>
				<p class="text-2xl font-bold text-yellow">SSL4</p>
				<div class="flex flex-row items-center justify-center gap-1">
					<a
						href="https://www.twitch.tv/mylifeisacircle"
						target="_blank"
						class="flex flex-row items-center justify-center gap-1 rounded-full border-2 border-translucent px-2 hover:border-pinklucent hover:text-pink"
						><HugeiconsIcon icon={TwitchIcon} size="18" strokeWidth={1.5} />MyLifeIsACircle</a
					>
				</div>
			</div>
		</div>

		<!-- SSL3 Milan -->
		<div class="group relative isolate flex aspect-square w-1/4 items-center justify-center">
			<enhanced:img
				class="absolute inset-0 -z-10 size-full object-contain group-hover:opacity-20"
				src="$lib/assets/ssl3-milan.png?w=1280;640;400"
				alt="milan"
			/>
			<div
				class="flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100"
			>
				<p class="text-2xl font-bold text-yellow">SSL3</p>
				<div class="flex flex-row items-center justify-center gap-1">
					<a
						href="https://www.twitch.tv/milan9135"
						target="_blank"
						class="flex flex-row items-center justify-center gap-1 rounded-full border-2 border-translucent px-2 hover:border-pinklucent hover:text-pink"
						><HugeiconsIcon icon={TwitchIcon} size="18" strokeWidth={1.5} />Milan9135</a
					>
				</div>
			</div>
		</div>
	</div>

	<p class="bold mt-8 flex items-center text-2xl">
		<span class="mx-2 text-yellow">Event Merchandise</span>
	</p>
	<div class="flex w-full flex-row gap-2">
		<!-- Beginner Mode -->
		<div class="group relative isolate flex aspect-square w-1/4 items-center justify-center">
			<enhanced:img
				class="absolute inset-0 -z-10 size-full object-contain group-hover:opacity-20"
				src="$lib/assets/ssl-beginner.png?w=1280;640;400"
				alt="beginner"
			/>
			<div
				class="flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100"
			>
				<p class="text-2xl font-bold text-yellow">Gamemode: Beginner</p>
				<div class="flex flex-row items-center justify-center gap-1">
					<a
						href="https://superstreamerlobby-shop.fourthwall.com/en-usd/products/beginner-mode-big-boy-mug"
						target="_blank"
						class="flex flex-row items-center justify-center gap-1 rounded-full border-2 border-translucent px-2 hover:border-pinklucent hover:text-pink"
						><HugeiconsIcon icon={SoftDrink02Icon} size="18" strokeWidth={1.5} />Mug</a
					>
					<a
						href="https://superstreamerlobby-shop.fourthwall.com/en-usd/products/sticker-sheet"
						target="_blank"
						class="flex flex-row items-center justify-center gap-1 rounded-full border-2 border-translucent px-2 hover:border-pinklucent hover:text-pink"
						><HugeiconsIcon icon={LoyaltyCardIcon} size="18" strokeWidth={1.5} />Stickers</a
					>
				</div>
			</div>
		</div>

		<!-- I Madnness -->
		<div class="group relative isolate flex aspect-square w-1/4 items-center justify-center">
			<enhanced:img
				class="absolute inset-0 -z-10 size-full object-contain group-hover:opacity-20"
				src="$lib/assets/ssl-i_madness.png?w=1280;640;400"
				alt="i madness"
			/>
			<div
				class="flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100"
			>
				<p class="text-2xl font-bold text-yellow">Gamemode: I Madness</p>
				<div class="flex flex-row items-center justify-center gap-1">
					<a
						href="https://superstreamerlobby-shop.fourthwall.com/en-usd/products/sticker-sheet"
						target="_blank"
						class="flex flex-row items-center justify-center gap-1 rounded-full border-2 border-translucent px-2 hover:border-pinklucent hover:text-pink"
						><HugeiconsIcon icon={LoyaltyCardIcon} size="18" strokeWidth={1.5} />Stickers</a
					>
				</div>
			</div>
		</div>

		<!-- Jumpsquare -->
		<div class="group relative isolate flex aspect-square w-1/4 items-center justify-center">
			<enhanced:img
				class="absolute inset-0 -z-10 size-full object-contain group-hover:opacity-20"
				src="$lib/assets/ssl-jumpsquare.png?w=1280;640;400"
				alt="jumpsquare"
			/>
			<div
				class="flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100"
			>
				<p class="text-2xl font-bold text-yellow">Gamemode: Jumpsquare</p>
				<div class="flex flex-row items-center justify-center gap-1">
					<a
						href="https://superstreamerlobby-shop.fourthwall.com/en-usd/products/sticker-sheet"
						target="_blank"
						class="flex flex-row items-center justify-center gap-1 rounded-full border-2 border-translucent px-2 hover:border-pinklucent hover:text-pink"
						><HugeiconsIcon icon={LoyaltyCardIcon} size="18" strokeWidth={1.5} />Stickers</a
					>
				</div>
			</div>
		</div>
	</div>
</div>
