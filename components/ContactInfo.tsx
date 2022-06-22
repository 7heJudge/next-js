import {NextPage} from "next";
import Heading from "./Heading";
import {User} from "../utils/types";

type Props = {
    contact: User;
}

const ContactInfo: NextPage<Props> = ({contact}) => {
    if (!contact) {
        return <Heading tag="h3" text="Empty contact"/>
    }

    const {name, email, address} = contact;

    const {city, zipcode, street} = address;

    return (
        <>
            <Heading tag="h3" text={name}/>
            <div>
                <strong>Email: </strong>
                {email}
            </div>
            <div>
                <strong>Address: </strong>
                {`City: ${city}, street: ${street}, ZIP: ${zipcode}`}
            </div>
        </>
    )
}

export default ContactInfo;