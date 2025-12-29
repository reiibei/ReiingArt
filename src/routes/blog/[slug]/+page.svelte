<!-- Pull info from .ts and show the correct data -->
<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.postMetadata.title}</title>
</svelte:head>

<!-- prose == tailwind magic keyword to automatically style things -->
<!-- prose-invert == work in darkmode -->
<div
	class="w-11/12 mx-auto prose flex flex-col items-center justify-center prose-invert"
>
	<div class="flex flex-row items-center whitespace-nowrap">
		<p class="bold flex items-center text-2xl">
			༻<span class="mx-2">
				{data.postMetadata.title}
			</span>
			<span class="mx-2 text-sm text-translucent italic">
				- {data.postMetadata.description}
			</span>༺
		</p>
	</div>
	<p class="text-justify">
		<data.postComponent />
	</p>
</div>
