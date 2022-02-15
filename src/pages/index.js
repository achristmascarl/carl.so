import Head from 'next/head';
import Layout from '../components/Layout';
import { c } from '../utils';
import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';


const pageTitle = 'Carl | Home';
const pageIcon = '🏠';

const tabStyle = (selected) => c(
  'w-full py-2',
  'rounded-md',
  'focus:outline-none',
  selected
    ? 'bg-white shadow font-bold'
    : 'text-gray-500 hover:bg-white/[0.5] hover:text-gray'
);

export default function Home() {
  const [pictureIndex, setPictureIndex] = useState(0);

  return (
    <Layout home icon={pageIcon}>
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
        <meta
          name="og:title"
          content={pageTitle}
        />
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
            'grid',
            'grid-cols-1',
            'md:grid-cols-2',
            'max-w-7xl',
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
            )}
          >
            <h1>
              Hi, I'm Carl.
            </h1>
            <h2>
              Avid Notion lover, shameless 
              Naruto fan, and occasional 
              needlepoint maker.
            </h2>
            <Tab.Group
              onChange={(index) => {
                setPictureIndex(index);
                // console.log('changed to:', index);
                // console.log(pictureIndex);
              }}
            >
              <Tab.List
                className={c(
                  'flex',
                  'p-1',
                  'bg-gray-50',
                  'rounded-md',
                  'mx-3',
                  'shadow-inner'
                )}
              >
                <Tab
                  className={({ selected }) => tabStyle(selected)}
                >
                  no hair
                </Tab>
                <Tab
                  className={({ selected }) => tabStyle(selected)}
                >
                  hair
                </Tab>
              </Tab.List>
            </Tab.Group>
          </div>
          <div
            className={c(
              'p-5',
              'mx-auto',
              'max-w-5xl',
              'flex',
              'flex-col',
              'justify-center',
            )}
          >
            <motion.div
              initial={{
                scale: .5,
              }}
              animate={{
                scale: 1,
                transition: {
                  duration: .75,
                },
              }}
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: .5,
                },
              }}
            >
              <img
                className={c(
                  (pictureIndex === 1 ?
                    'rounded-full' : ''),
                )}
                src={
                  pictureIndex === 0 ?
                    '/carl-framed-floral-compressed.png' :
                  pictureIndex === 1 ?
                    '/carl-outlined-bg-min.jpg' :
                    '/carl-framed-floral-compressed.png'
                }
              />
            </motion.div>
          </div>
        </div>
        <div
          className={c(
            'max-w-7xl',
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
              'bg-purple',
            )}
          >
            <h5>
              About Me
            </h5>
            <h3>
              What I'm up to.
            </h3>
            <p>
              What consumes most of my waking hours is 
              Gatherly (
                <a
                  href={
                    'https://gatherly.io/?utm_source=carl-so&' +
                    'utm_medium=text-link&utm_campaign=personal-websites'
                  }
                  target="_blank"
                >
                  gatherly.io
                </a>
              ), a startup I co-founded with a few longtime 
              friends; check out our website! 
              If you want to get in touch, please 
              reach out via{' '}
              <a
                href="https://www.linkedin.com/in/achristmascarl/"
                target="_blank"
              >
                LinkedIn
              </a>. 
            </p>
          </div>
        </div>
      </motion.div>
    </Layout>
  )
}
