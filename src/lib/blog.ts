import type { Component } from 'svelte';

export type PostMetadata = {
	title: string;
	date: string;
	description?: string;
};

// tells all the fancy stuff (like autocomplete) to show full .mdx
export type PostModule = { default: Component; metadata: PostMetadata };
