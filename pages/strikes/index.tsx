import Head from "next/head";
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/Layout";
import { ReactElement } from "react";
import LinkGrid from "@/components/LinkGrid";
import linkTree from "@/utils/linkTrees/strikesLinkTree";
import { Chip } from "primereact/chip";

const Strikes: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>D2 Compendium | Strikes</title>
        <meta name="description" content="D2 Player Guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Strikes</h1>
        <div>
          <Chip label="PvE" />
        </div>
        <p>
          Strikes, sometimes referred to as Vanguard Strikes, are one of Destiny 2&apos;s core
          activities. Strikes are repeatable story missions with up to 3 players that award XP,
          weapons, and armor.
        </p>
        <LinkGrid linkTree={linkTree} />
      </main>
    </>
  );
};

Strikes.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Strikes;
