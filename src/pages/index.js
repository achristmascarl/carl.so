import Head from 'next/head';
import Layout from '../components/Layout';

const siteTitle = 'Carl';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta
          name="og:title"
          content={siteTitle}
        />
      </Head>
      <section className="blue">
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}