// oxlint-disable typescript/explicit-module-boundary-types
import type { AppProps } from "next/app";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import "../styles/globals.css";

// oxlint-disable-next-line typescript/explicit-function-return-type func-style
function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col bg-neutral-700  min-h-screen text-gray-50 items-center">
      <div className="w-full">
        <Header />
      </div>

      <div>
        {/* oxlint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </div>

      <div className="mt-auto w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
