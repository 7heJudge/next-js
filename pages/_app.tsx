import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import Layout from "../components/Layout";
import Head from 'next/head';

function MyApp({Component, pageProps}: AppProps) {
    return <Layout>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} /></Layout>
}

export default MyApp
