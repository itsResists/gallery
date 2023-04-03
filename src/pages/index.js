import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import UploadButton from '@/components/upload'
import Gallery from '@/components/gallery'


export default function Home() {
  return (
    <>
      <Head>
        <title>Image Gallery Dev</title>
        <meta name="description" content="Image Gallery Dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <h1 className={styles.title}>Placeholder Title Here Huzzah!</h1>
        <UploadButton />
        <div>
          <Gallery />
        </div>

      </main>
    </>
  )
}
