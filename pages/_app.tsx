import "../styles/globals.css";
import "prism-themes/themes/prism-vsc-dark-plus.min.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
