import { Post } from "#site/content";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString( "ko-KR", {
    month: "long",
    day: "numeric",
    year: "numeric"
  })
}

export function publishedPosts(posts: Array<Post>) {
  return posts.filter((posts)=> posts.published);
}

export function sortPosts(posts: Array<Post>) {
 return posts.sort((a, b) => {
  if (a.date > b.date) return -1;
  if (a.date < b.date) return 1;
  return 0;
 })
}