import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      
      {/* Head import above allows for this */}
      <Head>
        <title>WebDev Junk</title>
        <meta name='keywords' content='some descriptive stuff, and, things' />
      </Head>

      <h1>Welcome to NextJS Crash Crouse</h1>
    </div>
  )
}
