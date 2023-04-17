import Head from "next/head";
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/Layout";
import { ReactElement } from "react";

const LostSectorRotation: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>D2 Compendium | Lost Sector Rotation</title>
        <meta name="description" content="D2 Player Guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Lost Sector Rotation - Season 20</h1>
      </main>
    </>
  );
};

LostSectorRotation.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default LostSectorRotation;
