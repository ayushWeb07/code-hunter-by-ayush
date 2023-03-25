import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <Head>
        <title>Code Hunter</title>
        <meta name="description" content="Code Hunter - A Blog which helps newbie coders to start learning to code, write better code and logics, debug errors in their code, connecting with expert coders, and many more!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="HTML, CSS, JavaScript, React, Next, Coding, Python, Node, Express, Vue, Angular, Svelte, Programming, Web, Website" />
        <meta name="author" content="Ayush Bommana" />
      </Head>



      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            A Modern Blog for &nbsp;
            <code className={styles.code}>Modern Coders</code>
          </p>
          <a
            href="https://ayush-bommana.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>By &nbsp;<span className={styles.code} >Ayush</span></p>
          </a>
        </div>

        <div className={styles.center}>
          <h1>Code Hunter</h1>
        </div>



        <div className={styles.grid}>

          <Link href="blogs/introduction-to-javascript">
            <div
              className={styles.card}
            >
              <h2 className={inter.className}>
                Basics of JavaScript<span>-</span>
              </h2>
              <p className={inter.className}>
                Discover and learn the basics and core fundamentals of JavaScript.
              </p>
            </div>
          </Link>

          <Link href="blogs/variables-and-datatypes-in-javascript">
            <div
              className={styles.card}
            >
              <h2 className={inter.className}>
                Variables in JS<span>-</span>
              </h2>
              <p className={inter.className}>
                Find in-depth information about variables and data types used in JavaScript.</p>
            </div>
          </Link>


          <Link href="blogs/functions-in-javascript">
            <div
              className={styles.card}
            >
              <h2 className={inter.className}>
                Functions in JS<span>-</span>
              </h2>
              <p className={inter.className}>
                Learn about functions and how they work in JavaScript.
              </p>
            </div>
          </Link>




        </div>
      </main>
    </>
  )
}
