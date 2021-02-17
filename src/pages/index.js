import Head from 'next/head';
import Layout from '../components/Layout';
import { c } from '../utils';

const siteTitle = 'Carl | Home';
const siteFavicon = '🏠';

export default function Home() {
  return (
    <Layout home>
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
        <meta
          name="og:title"
          content={siteTitle}
        />
      </Head>
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
          <img
            className={c(

            )}
            src="/carl-framed-floral-compressed.png"
          />
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
            friends. I would certainly appreciate if 
            you went to the website and checked it out! 
            If you want to get in touch, please 
            reach out via{' '}
            <a
              href="https://www.linkedin.com/in/carl-z-liu/"
              target="_blank"
            >
              LinkedIn
            </a>. 
          </p>
        </div>
      </div>
    </Layout>
  )
}