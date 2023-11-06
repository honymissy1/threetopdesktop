import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/3top.png"></link>
        <meta name="theme-color" content="#000" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}