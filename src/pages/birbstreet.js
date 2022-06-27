import Head from 'next/head';
import Layout from '../components/Layout';
import { c } from '../utils';
import { motion } from 'framer-motion';
import CopyIcon from '../components/CopyIcon';

const pageTitle = 'carl | BirbStreet';
const pageIcon = '🐦🚏';

export default function Home() {
  return (
    <Layout birbstreet icon={pageIcon}>
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
            )}
          >
            <h1>
              BirbStreet
            </h1>
            <h2>
              BirbStreet allows you to mint NFTs that represent a short position on a tweet. Just a fun, collectable way to express disagreement and spice up discourse :0
            </h2>
            <div>
              <iframe
                src="https://gateway.ipfscdn.io/ipfs/QmRPK2zjmkM8sodgCpyiCbLTvKGJwU3mWcwXwL2AWEBWym/nft-drop.html?contract=0x7a48c82ec6AB978011d00C7D5C251a55523CDD1b&chainId=137"
                width="600px"
                height="600px"
                style={{maxWidth: "100%"}}
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  )
}
