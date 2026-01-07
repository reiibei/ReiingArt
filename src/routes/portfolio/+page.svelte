<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<!--  mx-auto min-h-100 w-11/12 items-center -->

<div class="mx-auto flex min-h-100 w-11/12 flex-col items-center gap-2">
	<!-- aquarium date -->
	<div class="group relative isolate flex aspect-150/25 w-full items-center justify-center">
		<!-- width = 3 sizes -->
		<enhanced:img
			class="absolute inset-0 -z-10 size-full object-contain group-hover:opacity-30"
			src="$lib/assets/aquarium-date.jpg?w=1280;640;400"
			alt="aquarium date"
		/>
		<div class="flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
			<p class="text-2xl font-bold text-yellow">AQUARIUM DATE</p>
			<p class="w-11/12 text-center">hi this is some text about the project</p>
			<div class="flex flex-row items-center justify-center gap-2">
				<a
					href="https://www.twitch.tv/dufduf22"
					target="_blank"
					class="rounded-full border-2 border-translucent px-2 hover:border-pinklucent hover:text-pink"
					>@dufduf22</a
				>
			</div>
		</div>
	</div>

	<div class="flex w-full flex-row gap-2">
		<!-- poxial zz -->
		<div class="group relative isolate flex aspect-square w-1/4 items-center justify-center">
			<!-- width = 3 sizes -->
			<enhanced:img
				class="absolute inset-0 -z-10 size-full object-contain group-hover:opacity-30"
				src="$lib/assets/poxial-zz.png?w=1280;640;400"
				alt="poxial zz"
			/>
			<div class="flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
				<p class="text-2xl font-bold text-yellow">THUMBNAIL ASSET</p>
				<p class="w-11/12 text-center">hi this is some text about the project</p>
				<div class="flex flex-row items-center justify-center gap-2">
					<a
						href="https://www.youtube.com/@Poxial"
						target="_blank"
						class="rounded-full border-2 border-translucent px-2 hover:border-pinklucent hover:text-pink"
						>@poxial</a
					>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- poxial thumbnail -->
