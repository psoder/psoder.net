// oxlint-disable typescript/explicit-module-boundary-types
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import "../styles/globals.css";

const queryClient = new QueryClient();

// oxlint-disable-next-line typescript/explicit-function-return-type func-style
function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-dvh flex flex-col bg-neutral-700 text-gray-50">
        <header className="w-full">
          <Header />
        </header>

        <main className="flex-1 w-full">
          <div className="mx-auto max-w-7xl px-4">
            {/* oxlint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
          </div>
        </main>

        <footer className="w-full">
          <Footer />
        </footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;
