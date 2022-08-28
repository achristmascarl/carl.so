import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <!-- Google tag (gtag.js) --> */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-7C5JKWZTHL"></script>
          <script>
            {() => {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7C5JKWZTHL');
            }}
          </script>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href={
                'https://fonts.googleapis.com/css2?family=PT+Serif:wght@700' +
                '&family=Open+Sans:wght@400;700&display=swap'
            }
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
