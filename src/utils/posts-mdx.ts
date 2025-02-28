// lib/mdx.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface PostFrontmatter {
  filename: string;
  author: string;
  title: string;
  description: string;
  date: Date;
  thumbnail: string;
  category: string;
  tags: string[];
  published: boolean;
}

export interface PostItem {
  slug: string[];
  frontmatter: PostFrontmatter;
  content: string;
}

function getAllMdxFiles(dir: string, basePath: string = ''): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  return entries.flatMap(entry => {
    const relativePath = path.join(basePath, entry.name);
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      return getAllMdxFiles(fullPath, relativePath);
    } else if (entry.name.endsWith('.mdx')) {
      return [relativePath];
    } else {
      return [];
    }
  });
}

export function getAllPosts(): PostItem[] {
  const contentDir = path.join(process.cwd(), 'src/content');
  const filePaths = getAllMdxFiles(contentDir);
  
  const allPosts = filePaths.map(filePath => {
    const fullPath = path.join(contentDir, filePath);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // .mdx 확장자 제거 및 slug 배열 생성
    const slug = filePath.replace(/\.mdx$/, '').split(path.sep);
    
    return {
      slug,
      frontmatter: data as PostFrontmatter,
      content : content.slice(0, 1000),
    };
  });
  
  // 게시된 포스트만 필터링
  const publishedPosts = allPosts.filter(post => post.frontmatter.published);
  
  // 날짜 기준 내림차순 정렬 (최신순)
  return publishedPosts.sort((a, b) => {
    return b.frontmatter.date.getTime() - a.frontmatter.date.getTime();
  });
}

export function formatDate(date: Date): string {
  const d = new Date(date);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
}