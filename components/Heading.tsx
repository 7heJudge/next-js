type Props = {
    tag?: string;
    text: string;
}

const Heading = ({ tag, text }: Props) => {
    const Tag: any = tag || 'h1';

    return <Tag>{text}</Tag>
}

export default Heading;