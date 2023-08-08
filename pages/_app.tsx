import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import SiteHeader from "@/components/site-header";
import { SessionProvider } from "next-auth/react";
const inter = Inter({
  subsets: ["latin"],
  variable: "--inter-font",
  display: "swap",
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <div className={`${inter.className}`}>
      <SessionProvider session={session}>
        <SiteHeader />

        <Component {...pageProps} />
      </SessionProvider>
    </div>
  );
}
