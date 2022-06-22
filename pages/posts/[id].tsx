import Head from "next/head";
import PostInfo from "../../components/PostInfo";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {Post} from "../../utils/types";

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data: Array<Post> = await response.json();

    return {
        paths: data.map((item) => {
            return { params: { id: String(item.id) } }
        }),
        fallback: false,
    }
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { id }: any = context.params;

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();

    return {
        props: {
            post: data
        }
    }
}

type Props = {
    post: Post
}

const Post: NextPage<Props> = ({ post }) => (
    <>
        <Head>
            <title>Post page</title>
        </Head>
        <PostInfo post={post} />
    </>
);

export default Post;