import Link from 'next/link'
import { AiOutlineHome, AiOutlineUnorderedList } from "react-icons/ai"
import styles from "../styles/Header.module.css"

import { useRouter } from 'next/router';


export default function Header() {

    const router = useRouter();


    return (
        <header className={styles.header} >
            <ul>
                <li>
                    <Link href="/" className={router.pathname === "/" ? styles.activeLink : styles.inactiveLink} >
                        <AiOutlineHome /><span>Home</span>
                    </Link>
                </li>

                <li>
                    <Link href="/blogs" className={router.pathname === "/blogs" ? styles.activeLink : styles.inactiveLink} >
                        <AiOutlineUnorderedList /><span>Blogs</span>
                    </Link>
                </li>
            </ul>
        </header>
    )
}
