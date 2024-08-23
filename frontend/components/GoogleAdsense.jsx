import Script from "next/script";

const GoogleAdsense = ({ pubId }) => {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }
	
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pubId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
};

export default GoogleAdsense;
