import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col bg-neutral-700  min-h-screen text-gray-50 items-center">
      <div className="w-full">
        <Header />
      </div>

      <div>
        <Component {...pageProps} />
      </div>

      <div className="mt-auto w-full">
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
