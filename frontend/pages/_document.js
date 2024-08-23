import GoogleAdsense from "@/components/GoogleAdsense";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <GoogleAdsense pubId={process.env.NEXT_PUBLIC_ADSENSE_PUB_ID} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
