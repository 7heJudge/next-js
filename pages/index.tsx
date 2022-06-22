import type {GetStaticProps, NextPage} from 'next'
import styles from '../styles/Home.module.scss'
import Heading from "../components/Heading";
import Head from 'next/head';
import {Social} from "../utils/types";
import Socials from "../components/Socials";

type Props = {
    socials: Array<Social>
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const response = await fetch(`${process.env.API_HOST}socials`);
        const data = await response.json();

        if (!data) {
            return {
                notFound: true
            }
        }

        return {
            props: {
                socials: data,
            }
        }
    } catch {
        return {
            props: {
                socials: null
            }
        }
    }
}

const Home: NextPage<Props> = ({ socials }) => {
    return (
        <div className={styles.wrapper}>
            <Head><title>Home</title></Head>
            <Heading text="Next.js Application"/>
            <Socials socials={socials} />
        </div>
  )
}

export default Home
