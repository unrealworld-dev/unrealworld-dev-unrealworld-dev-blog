import Link from 'next/link';
import { vt323 } from "@/utils/fonts";
import { getAllPosts } from '@/utils/posts-mdx';
import PostCardDetail from './posts-card-detail';
import PostCard from './post-card';

export default function LatestPosts() {
	const posts = getAllPosts().slice(0, 4);

	return (
		<div className="mt-12">
			<h2 className={`${vt323.className} text-3xl text-[--foreground] mb-6 flex items-center`}>
			✍️ 최신글 <span className="ml-2 text-yellow-400">✨</span>
			</h2>
			<p className="text-sm text-[--foreground] opacity-70 mb-8">
				새로운 글이 올라왔습니다!
			</p>

			<div className="grid md:grid-cols-2 gap-6">
				{posts.map((post, index) => (
					<Link
						href={`/blog/${post.slug.join('/')}`}
						key={post.slug.join('/')}
						className={`group ${!index ? "row-span-3" : ""}`}
					>
						{!index ?
							<PostCardDetail post={post} />
							:
							<PostCard post={post} />
						}
					</Link>
				))}
			</div>
		</div >
	);
}