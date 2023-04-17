import Head from "next/head";
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/Layout";
import { ReactElement } from "react";
import { Chip } from "primereact/chip";

const Grandmasters: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>D2 Compendium | Grandmaster Nightfall</title>
        <meta name="description" content="D2 Player Guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Grandmaster Nightfalls</h1>
        <div className="chips">
          <Chip label="PvE" />
          <Chip label="Fixed Difficulty" />
          <Chip label="Fireteam-Based" />
          <Chip label="Endgame" />
        </div>
        <p>
          A weekly rotating strike at a fixed difficulty. Grandmaster strikes are the hardest PvE
          content in the game and are fireteam-based only, though some of the bravest players choose
          to solo them.
        </p>
        <p>Power delta is -25.</p>
      </main>
    </>
  );
};

Grandmasters.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Grandmasters;
