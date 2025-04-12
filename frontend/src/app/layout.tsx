import type { Metadata } from "next";
import { AptabaseProvider } from '@aptabase/react';

export const metadata: Metadata = {
  title: "Barnyak",
  description: "Video Games and Space News.  A collection of interesting things, reviews and my take on techish news.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet" />
      <script>
        {`
        var _paq = window._paq = window._paq || [];
        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function() {
          var u="//analytics.barnyak.com/";
          _paq.push(['setTrackerUrl', u+'matomo.php']);
          _paq.push(['setSiteId', '3']);
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
        })();`}
      </script>

      </head>
      <body><AptabaseProvider options={{
        host: 'https://analytics.barnyak.com'
      }} appKey="A-SH-0454767800">{children}</AptabaseProvider></body>
    </html>
  );
}
