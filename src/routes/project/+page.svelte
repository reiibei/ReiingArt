<svelte:head>
	<title>Reii | Project</title>
</svelte:head>

<div class="mx-auto mb-8 flex w-11/12 min-h-100 flex-col items-center gap-6">
	<div class="flex w-full flex-row gap-6">
		<div class="group relative isolate flex aspect-3/1 w-1/2 hover:scale-105">
			<a href="/dpcp" class="flex w-full items-end justify-center">
				<enhanced:img
					class="absolute inset-0 -z-10 size-full object-contain"
					src="$lib/assets/dpcp-folder.png?w=1280;640;400"
					alt="dupcup folder"
				/>
				<div
					class="flex w-6/7 flex-row items-center justify-center gap-2 rounded-3xl bg-[#19161fbc] p-5"
				>
					<enhanced:img
						class="aspect-square size-28 rounded-full"
						src="$lib/assets/dpcp-logo.png?w=1280;640;400"
						alt="dupcup logo"
					/>
					<div class="flex flex-col items-center justify-center gap-2">
						<p class="text-2xl font-bold text-yellow">DupCup [TETR.IO]</p>
						<p class="text-lg">Event Aesthetic & Promotional Artist</p>
					</div>
				</div>
			</a>
		</div>

		<div class="group relative isolate flex aspect-3/1 w-1/2 hover:scale-105">
			<a href="/ssl" class="flex w-full items-end justify-center">
				<enhanced:img
					class="absolute inset-0 -z-10 size-full object-contain"
					src="$lib/assets/ssl-folder.png?w=1280;640;400"
					alt="ssl folder"
				/>
				<div
					class="flex w-6/7 flex-row items-center justify-center gap-2 rounded-3xl bg-[#19161fbc] p-5"
				>
					<enhanced:img
						class="aspect-square size-28 rounded-full"
						src="$lib/assets/ssl-logo.png?w=1280;640;400"
						alt="ssl logo"
					/>
					<div class="flex flex-col items-center justify-center gap-2">
						<p class="text-2xl font-bold text-yellow">Super Streamer Lobby [TETR.IO]</p>
						<p class="text-lg">Gamemode & Merchandise Illustrator</p>
					</div>
				</div>
			</a>
		</div>
	</div>
</div>
