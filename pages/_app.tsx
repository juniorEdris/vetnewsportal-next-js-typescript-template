import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../component/Header";
import Container from "../component/Container";
import TopHeader from "../component/TopHeader";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Container>
        <>
          <TopHeader />
          <Header />
          <Component {...pageProps} />
        </>
      </Container>
    </div>
  );
}

export default MyApp;
