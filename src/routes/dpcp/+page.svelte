<script lang="ts">
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { QuoteUpIcon, QuoteDownIcon, TwitchIcon, BlueskyIcon } from '@hugeicons/core-free-icons';
</script>

<svelte:head>
	<title>DupCup</title>
</svelte:head>

<div class="mx-auto mb-8 flex w-11/12 flex-col items-center gap-2">
	<div
		class="flex flex-row justify-center gap-5 rounded-3xl border-4 border-dashed border-pink bg-pinklucent p-4"
	>
		<p class="flex justify-start">
			<HugeiconsIcon icon={QuoteUpIcon} size="23" strokeWidth={2.5} />
		</p>

		<p class="w-11/12 text-center text-2xl">
			The Dup Cup is a TETR.IO tournament series aimed at VTubers. Competitions follow a two-stage
			format, going from Battle Royales to an elimination bracket. Its main focus is to give the
			wider streaming community a small taste of competitive block-stackers, without the fear of top
			players and streamsnipers demolishing them outright like in a typical open lobby.
		</p>

		<p class="flex items-end justify-end">
			<HugeiconsIcon icon={QuoteDownIcon} size="23" strokeWidth={2.5} />
		</p>
	</div>

	<p class="bold mt-8 flex items-center text-2xl">
		<span class="mx-2 text-yellow"> DupCup v2 Graphics </span>
	</p>

	<div class="mb-4 flex flex-col items-center justify-center text-center">
		<p>
			The second version of DupCup graphics is one that I had put in lots of love and care into. As
			I still had very limited knowledge of cityscape I am very proud of the final product which
			felt lively!
		</p>
		<p>
			I also painstakenly done every individual windows.. I do wonder if there is an easier path for
			the future me to learn (╭ರ_•́)
		</p>
	</div>

	<div class="flex w-full flex-col gap-2">
		<div class="flex w-full flex-row gap-2">
			<!-- v2 Promo Art -->
			<div class="group relative isolate flex w-1/2 items-center justify-center">
				<enhanced:img
					class="absolute inset-0 -z-10 size-full object-contain group-hover:opacity-20"
					src="$lib/assets/dpcp-art.png?w=1280;640;400"
					alt="v2 promo art"
				/>
				<div
					class="flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100"
				>
					<p class="text-2xl font-bold text-yellow">Promo Art (WIP)</p>
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
						<p class="flex flex-row gap-1">
							<span class="text-pink">Organiser:</span>
							<a
								href="https://twitch.tv/dubstep298"
								target="_blank"
								class="flex flex-row items-center gap-0.5 hover:underline"
								><HugeiconsIcon icon={TwitchIcon} size="15" strokeWidth={1.5} />Dubstep298</a
							>
						</p>
						<p class="flex flex-row gap-1">
							<span class="text-pink">Featuring:</span>
							<a
								href="/dpcp"
								target="_blank"
								class="flex flex-row items-center gap-0.5 hover:underline"
								><HugeiconsIcon icon={TwitchIcon} size="15" strokeWidth={1.5} />name</a
							>,
							<a
								href="/dpcp"
								target="_blank"
								class="flex flex-row items-center gap-0.5 hover:underline"
								><HugeiconsIcon icon={TwitchIcon} size="15" strokeWidth={1.5} />name</a
							>,
							<a
								href="/dpcp"
								target="_blank"
								class="flex flex-row items-center gap-0.5 hover:underline"
								><HugeiconsIcon icon={TwitchIcon} size="15" strokeWidth={1.5} />name</a
							>,
							<a
								href="/dpcp"
								target="_blank"
								class="flex flex-row items-center gap-0.5 hover:underline"
								><HugeiconsIcon icon={TwitchIcon} size="15" strokeWidth={1.5} />name</a
							>,
							<a
								href="/dpcp"
								target="_blank"
								class="flex flex-row items-center gap-0.5 hover:underline"
								><HugeiconsIcon icon={TwitchIcon} size="15" strokeWidth={1.5} />name</a
							>,
							<a
								href="/dpcp"
								target="_blank"
								class="flex flex-row items-center gap-0.5 hover:underline"
								><HugeiconsIcon icon={TwitchIcon} size="15" strokeWidth={1.5} />name</a
							>
						</p>
					</div>
				</div>
			</div>

			<div class="flex w-1/2 flex-col gap-2">
				<!-- Still Image -->
				<div class="group relative isolate flex aspect-video h-1/3 items-center justify-center">
					<enhanced:img
						class="absolute inset-0 -z-10 size-full object-contain group-hover:opacity-20"
						src="$lib/assets/dpcp-still.png?w=1280;640;400"
						alt="still image"
					/>
					<div
						class="flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100"
					>
						<p class="text-2xl font-bold text-yellow">Stream Background</p>
						<div
							class="flex w-11/12 flex-col items-center justify-center text-center whitespace-nowrap"
						>
							<p>Cityscape of Misdrop City</p>
						</div>
					</div>
				</div>

				<!-- v2 Schedule -->
				<div class="group relative isolate flex aspect-video h-1/3 items-center justify-center">
					<enhanced:img
						class="absolute inset-0 -z-10 size-full object-contain group-hover:opacity-20"
						src="$lib/assets/dpcp-schedule.png?w=1280;640;400"
						alt="v2 schedule"
					/>
					<div
						class="flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100"
					>
						<p class="text-2xl font-bold text-yellow">Schedule</p>
						<div
							class="flex w-11/12 flex-col items-center justify-center text-center whitespace-nowrap"
						>
							<p class="flex flex-row gap-1 italic">
								Trophy by <a
									href="https://bsky.app/profile/vitwoiv.bsky.social"
									target="_blank"
									class="flex flex-row items-center gap-0.5 text-pink hover:underline"
									><HugeiconsIcon icon={BlueskyIcon} size="15" strokeWidth={1.5} />@vitwoiv</a
								>
							</p>
						</div>
					</div>
				</div>

				<!-- Solo Comm -->
				<div class="group relative isolate flex aspect-video h-1/3 items-center justify-center">
					<enhanced:img
						class="absolute inset-0 -z-10 size-full object-contain group-hover:opacity-20"
						src="$lib/assets/dpcp-single.png?w=1280;640;400"
						alt="solo comm"
					/>
					<div
						class="flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100"
					>
						<p class="text-2xl font-bold text-yellow">Solo Commentator</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<p class="bold mt-8 flex items-center text-2xl">
		<span class="mx-2 text-yellow"> DupCup v1 Graphics </span>
	</p>
	<div class="mb-4 flex flex-col items-center justify-center text-center">
		<p>
			Due to a short timeframe and a wrist injury, the first DupCup graphics didn’t meet my personal
			standards.
		</p>
		<p>
			However, it was still a valuable learning experience, as I had never tackled cityscape
			backgrounds before ٩(^ᗜ^ )و ´-
		</p>
	</div>

	<div class="flex w-full flex-row gap-2">
		<!-- v1 Promo Art -->
		<div class="group relative isolate flex aspect-video w-1/3 items-center justify-center">
			<enhanced:img
				class="absolute inset-0 -z-10 size-full object-contain group-hover:opacity-20"
				src="$lib/assets/dpcp1-art.png?w=1280;640;400"
				alt="v1 promo art"
			/>
			<div
				class="flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100"
			>
				<p class="text-2xl font-bold text-yellow">Promo Art</p>
				<div
					class="flex w-11/12 flex-col items-center justify-center text-center whitespace-nowrap"
				>
					<p class="flex flex-row gap-1">
						<span class="text-pink">Organiser:</span>
						<a
							href="https://twitch.tv/dubstep298"
							target="_blank"
							class="flex flex-row items-center gap-0.5 hover:underline"
							><HugeiconsIcon icon={TwitchIcon} size="15" strokeWidth={1.5} />Dubstep298</a
						>
					</p>
					<p class="flex flex-row gap-1">
						<span class="text-pink">Sponsor:</span>
						<a
							href="https://twitch.tv/ehrand0mguy"
							target="_blank"
							class="flex flex-row items-center gap-0.5 hover:underline"
							><HugeiconsIcon icon={TwitchIcon} size="15" strokeWidth={1.5} />EhRandomGuy</a
						>
					</p>
					<p class="flex flex-row gap-1">
						<span class="text-pink">Featuring:</span>
						<a
							href="https://twitch.tv/penbuvt"
							target="_blank"
							class="flex flex-row items-center gap-0.5 hover:underline"
							><HugeiconsIcon icon={TwitchIcon} size="15" strokeWidth={1.5} />PenbuVT</a
						>,
						<a
							href="https://twitch.tv/rikayamanovt"
							target="_blank"
							class="flex flex-row items-center gap-0.5 hover:underline"
							><HugeiconsIcon icon={TwitchIcon} size="15" strokeWidth={1.5} />Rika Yamano</a
						>,
						<a
							href="https://twitch.tv/perindigo"
							target="_blank"
							class="flex flex-row items-center gap-0.5 hover:underline"
							><HugeiconsIcon icon={TwitchIcon} size="15" strokeWidth={1.5} />Peri Indigo</a
						>
					</p>
				</div>
			</div>
		</div>

		<!-- v1 Schedule -->
		<div class="group relative isolate flex aspect-video w-1/3 items-center justify-center">
			<enhanced:img
				class="absolute inset-0 -z-10 size-full object-contain group-hover:opacity-20"
				src="$lib/assets/dpcp1-schedule.png?w=1280;640;400"
				alt="v1 schedule"
			/>
			<div
				class="flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100"
			>
				<p class="text-2xl font-bold text-yellow">Schedule</p>
			</div>
		</div>

		<!-- Stream Background -->
		<div class="group relative isolate flex aspect-video w-1/3 items-center justify-center">
			<enhanced:img
				class="absolute inset-0 -z-10 size-full object-contain group-hover:opacity-20"
				src="$lib/assets/dpcp1-screen.png?w=1280;640;400"
				alt="stream background"
			/>
			<div
				class="flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100"
			>
				<p class="text-2xl font-bold text-yellow">Stream Background</p>
			</div>
		</div>
	</div>
</div>
