import Head from 'next/head';
import Layout from '../../components/Layout';
import { c } from '../../utils';
import { redirects } from '../../../redirects';

const pageIcon = '👉';

function redirect(url) {
  if (typeof window !== 'undefined') {
    window.location.href = url;
  }
}

export default function Redirect({ redirectData }) {
  return (
    <Layout icon={pageIcon}>
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
        <title>carl | redirecting to {redirectData.name}...</title>
        <meta name="og:title" content={`
        carl | redirecting to ${redirectData.name}...`
        } />
      </Head>
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
            redirecting to {redirectData.name}...
          </h1>
          {redirect(redirectData.url)}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(redirects).map(redirectId => {
      return {
        params: {
          id: redirectId,
        },
      };
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      redirectData: { ...redirects[params.id] },
    }
  }
}
