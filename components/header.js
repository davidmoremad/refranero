import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { navLinks } from '../utils/navLink'

export default function Footer() {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.navbar__container}>
                    <Link href="/">
                        <a className={styles.navbar__logo}>
                            <Image src="/vercel.svg" alt="logo" width={100} height={100} />
                        </a>
                    </Link>
                    <div className={styles.navbar__links}>
                        {navLinks.map((link, index) => {
                            return (
                                <>
                                <ul>
                                    <Link href={link.path}>
                                        <li key={index}>{link.name}</li>
                                    </Link>
                                </ul>
                                </>
                            );
                        })}
                    </div>
                </div>
            </nav>
        </header>
    )
}