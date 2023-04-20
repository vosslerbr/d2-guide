import "@/styles/globals.css";
import "@/styles/layouts.css";
import type { AppProps } from "next/app";
//theme
import "primereact/resources/themes/viva-dark/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";
import PrimeReact from "primereact/api";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import Store from "@/components/Store";

PrimeReact.ripple = true;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  // eslint-disable-next-line
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Store>
      <>{getLayout(<Component {...pageProps} />)}</>
    </Store>
  );
}
