import { useState } from 'react'
import axios from 'axios'
import styles from '../../styles/Blog.module.css'
import Head from 'next/head'


export default function blog(props) {

    const [blog, setBlog] = useState(props?.blog)

    return (
        <>

            <Head>
                <title>{blog?.title !== undefined ? `${blog?.title}` : "No such blog"} - Code Hunter</title>
                <meta name="description" content="Code Hunter - A Blog which helps newbie coders to start learning to code, write better code and logics, debug errors in their code, connecting with expert coders, and many more!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="keywords" content="HTML, CSS, JavaScript, React, Next, Coding, Python, Node, Express, Vue, Angular, Svelte, Programming, Web, Website" />
                <meta name="author" content="Ayush Bommana" />
            </Head>

            {blog !== null ? <div className={styles.blog} >
                <h1>{blog?.title}</h1>
                <p>{blog?.description}</p>
            </div> : blog?.title !== undefined ? <p className={styles.loading} >Loading...</p> : <p className={styles.loading}  >No such blog found!</p>}
        </>
    )

}


export async function getServerSideProps(context) {
    let blog = null;

    await axios.get(`http://localhost:3000/api/blogs/${context.query.slug}`).then((res) => {
        blog = res?.data
    }).catch((err) => {
        console.log(err)
    })


    return {
        props: { blog }, // will be passed to the page component as props
    }
}