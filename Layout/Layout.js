import { useSelector } from "react-redux";

import { siteName } from "../config";

import Head from "next/head";

import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const lightbox = useSelector((state) => state.LightboxModal);
  return (
    <>
      <Head>
        <title>cow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      {/* {lightbox && <LightboxModal data={lightbox} />} */}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
