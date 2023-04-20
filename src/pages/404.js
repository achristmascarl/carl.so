import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { c } from '../utils';
import { motion } from 'framer-motion';

const pageTitle = 'carl | 404';
const pageIcon = '😬';

export default function Custom404() {
  return (
    <Layout icon={pageIcon}>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
        <link
          rel="icon"
          href={
            'data:image/svg+xml,' +
            '<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>' +
            `<text y=%22.9em%22 font-size=%2290%22>${pageIcon}</text>` +
            '</svg>'
          }
        />
        <title>{pageTitle}</title>
        <meta name="og:title" content={pageTitle} />
      </Head>
      <motion.div
        initial="initial"
        animate="enter"
        variants={{
          initial: {
            opacity: 0,
          },
          enter: {
            opacity: 1,
            duration: 0.5,
          },
        }}
      >
        <div
          className={c(
            'max-w-7xl',
            'md:min-h-screen',
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
              'place-items-center'
            )}
          >
            <h1>
              404
            </h1>
            <h2>
              {"oops; this page could not be found :("}
            </h2>
            <br />
            <Link
              href={'/'}
            >
              <button className={c(
                'btn',
              )}>
                🏠 go home
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </Layout>
  )
}
