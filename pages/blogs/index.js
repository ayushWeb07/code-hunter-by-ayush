import styles from '../../styles/Blogs.module.css'
import Head from 'next/head'
import { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

export default function Blogs(props) {

    const [blogs, setBlogs] = useState(props?.allBlogs)

    return (
        <>

            <Head>
                <title>Blogs - Code Hunter</title>
                <meta name="description" content="Code Hunter - A Blog which helps newbie coders to start learning to code, write better code and logics, debug errors in their code, connecting with expert coders, and many more!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="keywords" content="HTML, CSS, JavaScript, React, Next, Coding, Python, Node, Express, Vue, Angular, Svelte, Programming, Web, Website" />
                <meta name="author" content="Ayush Bommana" />
            </Head>

            <div className={styles.blogs} >
                <h1>All Blogs:</h1>
                <div className={styles.blogs_grid} >

                    {blogs?.length > 0 ? blogs?.map((b) => {
                        return <Link href={`blogs/${b?.slug}`} key={b?.slug} >
                            <div className={styles.card} >
                                <h2>
                                    {b?.title}
                                </h2>
                                <p>
                                    {b?.description?.substring(0, 150)}...
                                </p>
                            </div>
                        </Link>
                    }) : <p className={styles.loading} >Loading...</p>}



                </div>
            </div>

        </>
    )
}


export async function getServerSideProps(context) {
    let allBlogs = [];
    await axios.get("http://localhost:3000/api/blogs/").then((res) => {
        allBlogs = res?.data
    }).catch((err) => {
        console.log(err)
    })
    return {
        props: { allBlogs }, // will be passed to the page component as props
    }
}