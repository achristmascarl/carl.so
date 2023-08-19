import Head from 'next/head';
import { links } from '../links';

const pageIcon = '👉';

function redirect(url) {
  if (typeof window !== 'undefined') {
    window.location.href = url;
  }
}

export default function Redirect({ redirectData }) {
  return (
    <>
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
        <title>carl | redirecting to {redirectData.name}...</title>
        <meta name="og:title" content={`
        carl | redirecting to ${redirectData.name}...`
        } />
      </Head>
      <div>
        {redirect(redirectData.url)}
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(links)
            .filter(linkId => links[linkId].redirectActive === true)
            .map(linkId => {
      if (links[linkId].redirectActive) {
        return {
          params: {
            id: linkId,
          },
        };
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      redirectData: { ...links[params.id] },
    }
  }
}
