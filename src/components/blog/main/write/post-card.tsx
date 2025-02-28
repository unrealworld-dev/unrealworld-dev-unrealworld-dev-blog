import { formatDate, PostItem } from "@/utils/posts-mdx";
import Image from "next/image";

export default function PostCard({ post }: { post: PostItem }) {
	return (
		<div className="bg-[--background] border border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-row h-full">
			<div className="relative w-48 overflow-hidden">
				{post.frontmatter.thumbnail ? (
					<Image
						src={post.frontmatter.thumbnail}
						alt={post.frontmatter.title}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="object-cover transition-transform duration-300 group-hover:scale-105"
					/>
				) : (
					<div className="w-full h-full bg-gradient-to-r from-blue-900 to-purple-900 flex items-center justify-center">
						<span className="text-white text-xl font-bold">{post.frontmatter.category || 'Blog'}</span>
					</div>
				)}
			</div>
			<div className="p-4 flex flex-col flex-grow">
				<div className="mb-2">
					<span className="text-xs py-1 px-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
						{post.frontmatter.category || '기타'}
					</span>
				</div>
				<h3 className="text-lg font-semibold text-[--foreground] mb-2 line-clamp-2 group-hover:text-blue-500 transition-colors">
					{post.frontmatter.title}
				</h3>
				<div className="mt-auto flex items-center justify-between pt-4">
					<div className="flex items-center">
						<div className="h-6 w-6 rounded-full bg-gray-300 mr-2 overflow-hidden">
							<div className="h-full w-full flex items-center justify-center text-xs text-gray-700">
								{post.frontmatter.author?.charAt(0) || '?'}
							</div>
						</div>
						<span className="text-sm text-[--foreground] opacity-70">{post.frontmatter.author}</span>
						<span className="mx-2 text-gray-400">•</span>
						<span className="text-sm text-[--foreground] opacity-70">
							{formatDate(post.frontmatter.date)}
						</span>
					</div>
					{post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
						<div className="flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
							</svg>
							<span className="text-sm text-[--foreground] opacity-70">{post.frontmatter.tags.length}</span>
						</div>
					)}
				</div>
			</div>
		</div>

	)
}