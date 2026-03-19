import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts, getPostById, getAuthorById } from "../../lib/api";

export default function Post({ post, author }: any) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>Author: {author.name}</p>
      <p>{post.content}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.map(p => ({ params: { id: p.id } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostById(params?.id as string);
  const author = await getAuthorById(post!.author);

  return {
    props: { post, author },
    revalidate: 60,
  };
};