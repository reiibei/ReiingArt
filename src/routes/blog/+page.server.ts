import type { PageServerLoad } from './$types';
import type { PostModule } from '$lib/blog';

// determines what to show depending on URL
export const load: PageServerLoad = async () => {
    // glob import files
	const postsMap = import.meta.glob<PostModule>('/src/blog/*.mdx', { eager: true });
	const posts = Object.entries(postsMap).map(
		([fn, post]) => [fn.split('/').at(-1)!.split('.').slice(0, -1).join('.'), post.metadata] as const
	);
	return { posts };
};
