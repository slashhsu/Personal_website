import type { AppProps } from "next/app";
import { manrope, newsreader } from "@/lib/fonts";
import "@/app/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${manrope.variable} ${newsreader.variable} font-root`}>
      <Component {...pageProps} />
    </div>
  );
}
