// NOTE: this is the same as the default
// Just illustrating that you can do this - its not necessary and you probably won't need too
// next/head is where you would do meta tags and all that -
// See: https://nextjs.org/docs/advanced-features/custom-document
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
