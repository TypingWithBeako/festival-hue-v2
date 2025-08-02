import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontLiterata, fontSans } from "@/config/fonts";
import LenisScrollProvider from "@/components/lenis-provider";
import NavigationBar from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <LenisScrollProvider>
        <body>
          <Providers>
            <div className="fixed top-0 left-0 w-full z-10">
              <NavigationBar />
            </div>
            <div
              className={`relative flex flex-col z-0 ${fontLiterata.variable}`}
            >
              {children}
            </div>
          </Providers>
        </body>
      </LenisScrollProvider>
    </html>
  );
}
