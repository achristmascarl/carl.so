import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href={
              "https://fonts.googleapis.com/css2?family=PT+Serif:wght@700" +
              "&family=Open+Sans:wght@400;700&display=swap"
            }
            rel="stylesheet"
          />
        </Head>
        <body>
          {/* <!-- Google tag (gtag.js) --> */}
          <Script
            src={"https://www.googletagmanager.com/gtag/js?id=G-7C5JKWZTHL"}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', 'G-7C5JKWZTHL');
            `}
          </Script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
