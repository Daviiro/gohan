import type { AppProps } from "next/app";
import "@/styles/globals.scss";
import "@/i18n";

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
