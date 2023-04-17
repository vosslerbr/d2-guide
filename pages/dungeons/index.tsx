import Head from "next/head";
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/Layout";
import { ReactElement } from "react";
import { Chip } from "primereact/chip";

const Dungeons: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>D2 Compendium | Dungeons</title>
        <meta name="description" content="D2 Player Guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Dungeons</h1>
        <div className="chips">
          <Chip label="PvE" />
          <Chip label="Chosen Difficulty" />
          <Chip label="Fireteam-Based" />
          <Chip label="3 Players" />
        </div>
        <p></p>
      </main>
    </>
  );
};

Dungeons.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Dungeons;
