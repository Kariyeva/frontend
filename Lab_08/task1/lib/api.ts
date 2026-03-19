import { Post, Author } from "../types";

const authors: Author[] = [
  { id: "1", name: "John Doe", bio: "Tech writer", avatar: "" },
  { id: "2", name: "Jane Smith", bio: "React expert", avatar: "" },
];

const posts: Post[] = [
  {
    id: "1",
    title: "Next.js Intro",
    content: "Next.js is a React framework...",
    author: "1",
    date: "2026-03-01",
    tags: ["react"],
    readTime: 5,
  },
  {
    id: "2",
    title: "SSR vs SSG",
    content: "SSR and SSG differences...",
    author: "2",
    date: "2026-03-02",
    tags: ["nextjs"],
    readTime: 7,
  },
];

export async function getAllPosts() {
  return posts;
}

export async function getPostById(id: string) {
  return posts.find(p => p.id === id);
}

export async function getAuthorById(id: string) {
  return authors.find(a => a.id === id);
}