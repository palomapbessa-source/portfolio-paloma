import "./globals.css";

import { Inter, PT_Serif } from "next/font/google";
import Script from 'next/script';
  
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-serif",
});

export const metadata = {
  title: "Paloma Bessa | Product UX Designer",

  description:
    "Product UX Designer especializada em pesquisa, estratégia, UX/UI e produtos digitais. Transformo hipóteses em soluções digitais com foco em clareza, execução e resultado.",

  keywords: [
    "Product Designer",
    "UX Designer",
    "UX Research",
    "UI Design",
    "Design System",
    "Produtos Digitais",
  ],

  openGraph: {
    title: "Paloma Bessa | Product UX Designer",

    description:
      "Transformo hipóteses em soluções digitais com foco em clareza, execução e resultado.",

    url: "https://pbessa.com.br",

    siteName: "Paloma Bessa",

    locale: "pt_BR",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Paloma Bessa | Product UX Designer",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      {GA_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', { page_path: window.location.pathname });
                `,
            }}
          />
        </>
      )}

      <body
        className={`
          ${inter.className}
          ${ptSerif.variable}
          min-h-screen
          antialiased
        `}
      >

        <Header />

        <main>
          {children}
        </main>

        <Footer />

      </body>

    </html>
  );
}