import { GetStaticProps } from "next";
import Link from "next/link";
import { getAllPosts } from "../lib/api";

export default function Home({ posts }: any) {
  return (
    <div>
      <h1>My Blog</h1>
      {posts.map((post: any) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: { posts },
    revalidate: 60,
  };
};
