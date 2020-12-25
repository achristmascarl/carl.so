import Head from 'next/head';
import Layout from '../components/Layout';
import { c } from '../utils';

const siteTitle = 'Carl | Cats';
const siteFavicon = '😺';

export default function Home() {
  return (
    <Layout contact>
      <Head>
        <link
          rel="icon"
          href={
            'data:image/svg+xml,' +
            '<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>' +
              `<text y=%22.9em%22 font-size=%2290%22>${siteFavicon}</text>` +
            '</svg>'
          }
        />
        <title>{siteTitle}</title>
        <meta name="og:title" content={siteTitle} />
      </Head>
      <div
        className={c(
          'max-w-7xl',
          'md:h-screen',
          'mx-auto',
          'px-4',
          'sm:px-6',
          'lg:px-8',
        )}
      >
        <div
          className={c(
            'p-5',
            'mx-auto',
            'max-w-2xl',
            'flex',
            'flex-col',
            'justify-center',
            'text-center',
          )}
        >
          <h1>
            Coming Soon
          </h1>
          <h2>
            Pictures of cats :0
          </h2>
        </div>
      </div>
    </Layout>
  )
}