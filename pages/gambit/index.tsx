import Head from "next/head";
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/Layout";
import { ReactElement } from "react";
import { Chip } from "primereact/chip";
import Link from "next/link";

const Gambit: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>D2 Compendium | Gambit</title>
        <meta name="description" content="D2 Player Guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Gambit</h1>
        <div className="chips">
          <Chip label="PvEvP" />
        </div>
      </main>
    </>
  );
};

Gambit.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Gambit;
