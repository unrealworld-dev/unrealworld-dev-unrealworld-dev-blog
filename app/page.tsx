import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, publishedPosts, sortPosts } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { posts } from "#site/content"
import { PostItems } from "@/components/post-item";
import { title } from "process";

export default function Home() {
  const latestPosts = sortPosts(publishedPosts(posts)).slice(0, 5);

  return (
    <>
      <section className="space-y-6 p-6 md:pb-12 md:mt-10 lg:py-32">
        <div className="container flex flex-col gap-4 text-center mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black w-full text-balance">
            Title
          </h1>
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
            여기는 Unreal Engine과 VR를 개발하는 블로그입니다.
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link href="/blog" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}>
              View Blog
            </Link>
            <Link href={siteConfig.link.github} target="_blank" rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-fit")}
            >
              Github
            </Link>
          </div>
        </div>
      </section>
      <section className="container mx-auto max-w-4xl p-6 lg:py-10 flex flex-col space-y-6 mt-40">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Blog Posts
        </h2>
        <ul className="flex flex-col mt-4">
          {
            latestPosts.map(post => (
              <li key={post.slug} className="first:border-t first:border-border">
                <PostItems slug={post.slug} title={post.title} description={post.description} date={post.date} />
              </li>
            ))
          }
        </ul>
      </section>
    </>
  );
}
