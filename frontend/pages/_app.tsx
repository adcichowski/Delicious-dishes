import "../styles/globals.css";
import type { AppProps } from "next/app";
console.log(process.env.NODE_ENV);
function MyApp({ Component, pageProps }: AppProps) {
  return <Component className="bg-white-200" {...pageProps} />;
}
export default MyApp;
