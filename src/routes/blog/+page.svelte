<script lang="ts">
	import type { PageProps } from './$types';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { StarsIcon } from '@hugeicons/core-free-icons';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="mx-auto min-h-100 w-11/12">
	{#each data.posts as [slug, post]}
		{@const date = new Date(post.date)}
		<a href="/blog/{slug}">
			<!-- article = fancy div, dw bout it -->
			<article class="mb-3 flex flex-col">
				<div class="flex flex-row items-center">
					<p class="flex flex-col text-left whitespace-nowrap">
						<span class="text-2xl font-bold">{post.title}</span>
						<span class="text-yellow">{post.description}</span>
					</p>

					<hr class="mr-2 ml-8 w-full items-center border-dashed border-translucent" />

					<p
						class="flex flex-row items-center justify-end gap-1 text-right whitespace-nowrap text-translucent italic"
					>
						<HugeiconsIcon icon={StarsIcon} size="15" strokeWidth={1} />
						{date.toLocaleDateString('zh', {
							year: 'numeric',
							month: '2-digit',
							day: '2-digit'
						})}
					</p>
				</div>
			</article>
		</a>
	{/each}
</div>
