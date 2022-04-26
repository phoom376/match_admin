import "@/styles/global.scss";
import Cookies from "js-cookie";
import Router from "next/router";
import { useEffect, useState } from "react";

import { wrapper } from "../redux/store";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const Verify = async () => {
      await CookieCheck();
    };
    Verify();
  }, []);

  const CookieCheck = async () => {
    if (!Cookies.get("_t_")) {
      Object.keys(Cookies.get()).forEach((e) => {
        Cookies.remove(e);
      });
      await Router.push("/login");
      // await (<Link to="/login" />);
    }
  };
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
