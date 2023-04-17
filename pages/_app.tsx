import "../styles/globals.css";

import type { AppProps } from "next/app";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="flex flex-col min-h-screen items-center">
            <div className="w-full">
                <Header />
            </div>

            <div className="h-full py-8">
                <Component {...pageProps} />
            </div>

            <div className="mt-auto w-full">
                <Footer />
            </div>
        </div>
    );
}

export default MyApp;
