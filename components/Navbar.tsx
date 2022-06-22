import Link from "next/link";
import Image from 'next/image'
import {useRouter} from "next/router";

import styles from "../styles/Navbar.module.scss";
import {useEffect} from "react";

const Navbar = () => {
    const { pathname } = useRouter();

    const navigation = [
        {id: 1, label: 'Home', path: '/'},
        {id: 2, label: 'Posts', path: '/posts'},
        {id: 3, label: 'Contacts', path: '/contacts'},
    ]

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image src="/logo-social.png" width={60} height={60} alt="logo" />
            </div>
            <div className={styles.links}>
                {navigation.map((item) => <Link key={item.id} href={item.path}>
                    <a className={pathname === item.path ? styles.active : ''}>{item.label}</a>
                </Link>)}
            </div>
        </nav>
    )
}

export default Navbar;