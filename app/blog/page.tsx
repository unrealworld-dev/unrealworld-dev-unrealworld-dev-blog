import { posts } from "#site/content"
import { PostItems } from "@/components/post-item"
import { publishedPosts, sortPosts } from "@/lib/utils";

export default async function Blogpage() {
	const publicedPosts = publishedPosts(posts);
	const sortedPosts = sortPosts(publicedPosts);
	const displayPosts = sortedPosts;

	return (
		<div className="container max-w-4xl p-6 lg:p-10">
			<div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
				<div className="flex-1 space-y-4">
					<h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
					<p className="text-xl text-muted-foreground">
						VR과 UNREAL 을 개발하는 블로그입니다.
					</p>
				</div>
			</div>
			<hr className="mt-8" />
			{displayPosts?.length > 0 ?
				(<ul className="flex flex-col ">
					{displayPosts.map(({ slug, date, title, description }) => {
						return (
							<li key={slug}>
								<PostItems slug={slug} date={date} title={title} description={description}></PostItems>
							</li>
						)
					})}
				</ul>) :
				(<p>아직 글이 없습니다</p>)}
		</div>
	)

}