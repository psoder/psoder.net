import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>psoder.net</title>
            </Head>
            <div className="flex flex-col min-h-screen items-center">
                <Header />

                <div className="h-full py-16">
                    <Component {...pageProps} />
                </div>

                <Footer />
            </div>
        </>
    );
}

export default MyApp;
