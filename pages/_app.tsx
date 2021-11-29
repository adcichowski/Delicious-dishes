import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LoginProvider } from "../hooks/context/LoginContext";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoginProvider>
      <Component className="bg-white-200" {...pageProps} />
    </LoginProvider>
  );
}
export default MyApp;
