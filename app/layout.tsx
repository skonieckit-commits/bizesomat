import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: { default: "Biznesomat — automaty vendingowe, leasing, 24/7", template: "%s | Biznesomat" },
  description: "Portal doradczy o automatach vendingowych. Kwiatomaty, ciastomaty, chlebomaty, mięsomaty, warzywomaty. Leasing od 10% wkładu własnego. Cała Polska.",
  metadataBase: new URL("https://biznesomat.eu"),
  openGraph: {
    title: "Biznesomat — automaty vendingowe",
    description: "Zbuduj biznes który zarabia 24/7. Kwiatomaty, ciastomaty i inne -omaty z leasingiem od ręki.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
