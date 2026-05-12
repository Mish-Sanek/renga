import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import PageHeader from "@/components/PageHeader";
import PageFooterBig from "@/components/PageFooterBig";
import ScrollContainer from "@/components/ScrollContainer";
import GetInTouchFixed from "@/components/GetInTouchFixed";

export const metadata = {
  metadataBase: new URL("https://renua.one"),
  title: {
    default: "Renua — Brand, Product & Digital Design Agency",
    template: "%s | Renua",
  },
  description:
    "Renua is a digital design agency creating brands, products and digital experiences for startups and technology companies.",
  keywords: [
    "design agency",
    "product design agency",
    "branding agency",
    "saas design agency",
    "ui ux agency",
    "digital design studio",
  ],
  authors: [{ name: "Renua Team", url: "https://renua.one" }],
  creator: "Renua Creative Agency",
  publisher: "Renua",
  openGraph: {
    title: "Renua",
    description: "Brand, product and digital design agency.",
    url: "https://renua.one",
    siteName: "Renua",
    images: [
      {
        url: "/Renua_Preview.png",
        width: 1200,
        height: 630,
        alt: "Renua - Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Renua",
    description: "Brand, product and digital design agency.",
    images: ["/Renua_Preview.png"],
    creator: "@renua",
  },
  alternates: {
    canonical: "https://renua.one",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "favicon/favicon.ico",
    shortcut: "favicon/favicon-16x16.png",
    apple: "favicon/apple-touch-icon.png",
  },
  themeColor: "#0D0D0D",
  other: {
    "p:domain_verify": "314f74d0dbf28b0b51e17b63977cdc71",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollContainer>
          <div className="app">
            <PageHeader />
            {children}
            <PageFooterBig />
            <GetInTouchFixed />
          </div>
        </ScrollContainer>
      </body>
      <GoogleAnalytics gaId="G-54E24VX7E5" />
      {/* <Script
        id="emailjs-init"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        strategy="lazyOnload"
      />
      <Script
        id="emailjs-init-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `(function(){ emailjs.init('XVlqzmwyk5p21XGJI'); })();`
        }}
      /> */}
    </html>
  );
}
