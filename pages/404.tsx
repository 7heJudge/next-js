import {NextPage} from "next";
import {useRouter} from "next/router";

import Heading from "../components/Heading";
import {useEffect} from "react";
import Head from "next/head";
// import styles from "../styles/404.modules.scss";

const Error: NextPage = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => router.push('/'), 3000);
    }, [router])
    return <>
        <Head>
            Error
        </Head>
        <Heading text="404"/>
        <Heading tag="h2" text="Something is going wrong..."/>
    </>
}

export default Error;