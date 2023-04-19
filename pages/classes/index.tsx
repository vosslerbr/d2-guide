import Head from "next/head";
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/Layout";
import { ReactElement } from "react";

import LinkGrid from "@/components/LinkGrid";
import linkTree from "@/utils/linkTrees/classesLinkTree";

const Classes: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>D2 Compendium | Classes</title>
        <meta name="description" content="D2 Player Guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Classes</h1>

        <LinkGrid linkTree={linkTree} />
      </main>
    </>
  );
};

Classes.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Classes;
