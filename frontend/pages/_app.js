import GoogleAdsense from "@/components/GoogleAdsense";
import "@/styles/globals.css";
import { DM_Sans } from "next/font/google";

const dmSansFont = DM_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  fallback: ["Arial", "sans-serif"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={`bg-[#F9F9F9] text-[#222] ${dmSansFont.className}`}>
        <Component {...pageProps} />
      </main>
    
      <GoogleAdsense pubId={process.env.NEXT_PUBLIC_ADSENSE_PUB_ID} />
    </>
  );
}
