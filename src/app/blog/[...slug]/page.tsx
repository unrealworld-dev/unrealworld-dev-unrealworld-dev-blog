import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

type Props = {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({params} : Props) {
	const slug = (await params)?.slug;
	const postPath = [...slug].join('/');

  if (!fs.existsSync(path.join(process.cwd(), "src/content/", postPath + ".mdx")))
    notFound();

	const mdxContent = await import(`@/content/${postPath}.mdx`);

	const Post = mdxContent.default;
	console.log(mdxContent, Post)
	return <Post />
}

export const dynamicParams = true;