// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from "next/document";

// eslint-disable-next-line @next/next/no-document-import-in-page
import type { DocumentContext } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pl-PL">
        <Head>
          <link
            rel="preload"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
            href="/fonts/hind-bold-webfont.woff"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
            href="/fonts/hind-semibold-webfont.woff"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
            href="/fonts/hind-medium-webfont.woff"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
            href="/fonts/hind-regural-webfont.woff"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
            href="/fonts/hind-light-webfont.woff"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="text-black-900 max-w-screen-xl text-base my-0 mx-auto">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
