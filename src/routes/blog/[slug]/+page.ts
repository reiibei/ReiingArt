import type { PageLoad } from './$types';
import type { PostModule } from '$lib/blog';

// determines what to show depending on URL
export const load: PageLoad = async ({ params }) => {
	// `..` means "go to the parent folder" (see README for more info)
    const postModule = await (import(`../../../blog/${params.slug}.mdx`) as Promise<PostModule>);
	const postComponent = postModule.default;
	const postMetadata = postModule.metadata;
	return { postComponent, postMetadata };
};