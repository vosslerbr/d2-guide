import Head from "next/head";
import { NextPageWithLayout } from "./_app";
import Layout from "@/components/Layout";
import { ReactElement } from "react";
import { linkTree } from "@/utils/linkTrees/homeLinkTree";
import LinkGrid from "@/components/LinkGrid";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>D2 Compendium</title>
        <meta name="description" content="D2 Player Guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LinkGrid linkTree={linkTree} />
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
