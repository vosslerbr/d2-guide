import Head from "next/head";
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/Layout";
import { ReactElement } from "react";
import { Chip } from "primereact/chip";
import Link from "next/link";

const Nightfalls: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>D2 Compendium | Nightfall Strikes</title>
        <meta name="description" content="D2 Player Guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Nightfall Strikes</h1>
        <div className="chips">
          <Chip label="PvE" />
          <Chip label="Chosen Difficulty" />
          <Chip label="Matchmade" />
          <Chip label="Fireteam-Based" />
        </div>
        <p>
          A weekly rotating strike at a chosen difficulty. You&apos;ll be matched with other players
          for Hero difficulty. Legend and Master difficulty are fireteam-based.
        </p>
        <p>Power delta table here.</p>
        <p>
          You can find this season&apos;s Nightfall rotation{" "}
          <Link href="/strikes/rotation">here</Link>
        </p>
      </main>
    </>
  );
};

Nightfalls.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Nightfalls;
