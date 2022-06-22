export type User = {
    id: number
    name: string
    username: string
    email: string
    address: Address
};

type Address = {
    street: string
    suite: string
    city: string
    zipcode: string
}

export type Social = {
    id: number
    icon: string
    path: string
}

export type Post = {
    userId: number
    id: number
    title: string
    body: string
}