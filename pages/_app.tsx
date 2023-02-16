import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import type { AppProps } from "next/app";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="flex flex-col min-h-screen items-center">
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
