import {GetServerSideProps, NextPage} from "next";
import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";
import {User} from "../../utils/types";

type Props = {
    contacts: User;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id }: any = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
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

const Id: NextPage<Props> = ({contacts}) => {
    return <>
        <Head><title>Contact</title></Head>
        <ContactInfo contact={contacts} />
    </>
}

export default Id;