import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/index.module.css'
type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <div className={styles.layoutScreen}>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header>
            <nav className={styles.layoutHead}  >
                <Link href="/">
                    <a className={styles.linkHead}>Home</a>
                </Link>{' '}
        |{' '}
                <Link href="/about">
                    <a className={styles.linkHead}>About</a>
                </Link>{' '}
        |{' '}
                <Link href="/users">
                    <a className={styles.linkHead}>Users List</a>
                </Link>{' '}
                {/* | <a href="/api/users">Users API</a> */}
            </nav>
        </header>
        {children}
        <footer>
            <hr />
            <span>I'm here to stay (Footer)</span>
        </footer>
    </div>
)

export default Layout
