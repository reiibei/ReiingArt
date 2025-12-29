# Reiing Art

## Guides from Josh :D

**Markdown:**

Markdown is a simple markup language (similar to HTML) in that it lets you add formatting to text with special characters (like `#`, `*`, etc.).

There's lots of good cheat sheets out there but it's basically what's in discord so you probably already know most of the important ones. Markdown here in svelte is a lot more capable (like allowing HTML) so we can do more if we need to.

**Svelte:**

Any route in a svelte project that is wrapped with `[]` turns it into a variable. This means a url like `/about/[name]` will let you go to any page that is the format `/about/some_name`.

So you could go to:

- `/about/reii`
- `/about/josh`
- `/about/boi`

And they would all render the same page.

**Blog:**

3 Main parts:

- MDX Files (markdown blog content) - stuff in the blog
- Blog index (list of all posts) `/src/routes/blog/+page.svelte`
- Blog page renderer (shows a specific blog post based on the URL) `/src/routes/blog/[slug]/+page.svelte`