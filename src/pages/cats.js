import Head from 'next/head';
import Layout from '../components/Layout';
import { c } from '../utils';
import { motion } from 'framer-motion';

const pageTitle = 'Carl | Cats';
const pageIcon = '😺';

export default function Home() {
  return (
    <Layout cats icon={pageIcon}>
      <Head>
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
      </motion.div>
    </Layout>
  )
}