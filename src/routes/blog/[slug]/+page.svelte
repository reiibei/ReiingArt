<!-- Pull info from .ts and show the correct data -->
<script lang="ts">
	import type { PageProps } from './$types';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { LicenseDraftIcon } from '@hugeicons/core-free-icons';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.postMetadata.title}</title>
</svelte:head>

<!-- prose == tailwind magic keyword to automatically style things -->
<!-- prose-invert == work in darkmode -->
<div class="mx-auto mb-8 flex w-11/12 flex-col items-center justify-center">
	<div
		class="mt-2 mb-4 flex flex-row items-center rounded-full border-2 border-dashed border-yellucent px-4 py-2 whitespace-nowrap"
	>
		<p class="bold flex items-center text-2xl">
			<HugeiconsIcon icon={LicenseDraftIcon} size="20" strokeWidth={2} />
			<span class="mx-2 text-yellow">
				{data.postMetadata.title}
			</span>
			<span class="mr-2 text-sm text-translucent italic">
				- {data.postMetadata.description}
			</span>
		</p>
	</div>
	<p class="prose text-justify prose-invert">
		<data.postComponent />
	</p>
</div>
