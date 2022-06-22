import {GetStaticProps, NextPage} from "next";
import Head from "next/head";
import Heading from "../../components/Heading";
import {Post} from "../../utils/types";
import Link from "next/link";

type Props = {
    posts: Array<Post>
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            posts: data,
        }
    }
}

const Index: NextPage<Props> = ({ posts }) => {
    return <>
        <Head><title>Index</title></Head>
        <Heading text="Posts list: "/>
        <ul>{posts && posts.map((post) => <li key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li>)}</ul>
    </>
}

export default Index;