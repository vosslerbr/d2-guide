import Head from "next/head";
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/Layout";
import { ReactElement } from "react";
import { useRouter } from "next/router";

const Subclass: NextPageWithLayout = () => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <>
      <Head>
        <title>D2 Compendium | {id}</title>
        <meta name="description" content="D2 Player Guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{id}</h1>
      </main>
    </>
  );
};

Subclass.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Subclass;
