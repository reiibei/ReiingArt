<script lang="ts">
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { BlushBrush02FreeIcons, StarIcon, FolderFavouriteIcon } from '@hugeicons/core-free-icons';
</script>

<svelte:head>
	<title>Reii Ng</title>
</svelte:head>

<div class="flex min-h-100 flex-col items-center p-1 text-center">
	<div class="flex w-9/11 flex-col items-center text-lg">
		<p>
			Creative multimedia designer with 3+ years of freelance experience in animation and
			illustration.
		</p>
		<p>
			Skilled in Adobe Creative Suite and Clip Studio Paint; enthusiastic about visual storytelling,
			sound mixing, and building engaging experiences through design and code.
		</p>
		<p class="mt-4">
			With a wide array of interest and skillset, Reii covers character illustration to visual
			design, video editing, sound mixing, UX/UI and some simple website deisgn.
		</p>
	</div>

	<div class="mt-8 flex w-full items-end justify-center gap-5">
		<enhanced:img
			class="aspect-square size-60 rounded-2xl border-5 border-double border-translucent p-1"
			src="$lib/assets/pfp-teto.png?w=1280;640;400"
			alt="pfp teto"
		/>
		<enhanced:img
			class="aspect-square size-60 rounded-2xl border-5 border-double border-translucent p-1"
			src="$lib/assets/pfp-heart.png?w=1280;640;400"
			alt="pfp heart"
		/>
		<enhanced:img
			class="aspect-square size-60 rounded-2xl border-5 border-double border-translucent p-1"
			src="$lib/assets/pfp-mimikyu.png?w=1280;640;400"
			alt="pfp mimikyu"
		/>
		<enhanced:img
			class="aspect-square size-60 rounded-2xl border-5 border-double border-translucent p-1"
			src="$lib/assets/teto-trio.png?w=1280;640;400"
			alt="pfp trio"
		/>
		<enhanced:img
			class="aspect-square size-60 rounded-2xl border-5 border-double border-translucent p-1"
			src="$lib/assets/pfp-uppies.png?w=1280;640;400"
			alt="pfp uppies"
		/>
	</div>
</div>
