import {GetStaticProps, NextPage} from "next";
import Head from "next/head";
import Link from "next/link";
import Heading from "../../components/Heading";
import {User} from "../../utils/types";

type Props = {
    contacts: Array<User>;
};

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            contacts: data,
        }
    }
}

const Contacts: NextPage<Props> = ({contacts}) => {
    return <>
        <Head><title>Contacts</title></Head>
        <Heading text="Contacts list: "/>
        <ul>{contacts && contacts.map((contact) => <li key={contact.id}><Link href={`/contacts/${contact.id}`}>{contact.name}</Link></li>)}</ul>
    </>
}

export default Contacts;