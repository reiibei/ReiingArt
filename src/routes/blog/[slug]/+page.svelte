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
<div class="prose prose-invert">
	<data.postComponent />
</div>
