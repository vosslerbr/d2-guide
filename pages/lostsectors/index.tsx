import Head from "next/head";
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/Layout";
import { ReactElement } from "react";
import { Chip } from "primereact/chip";
import Link from "next/link";

const LostSectors: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>D2 Compendium | Lost Sectors</title>
        <meta name="description" content="D2 Player Guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Lost Sectors</h1>
        <div className="chips">
          <Chip label="PvE" />
          <Chip label="Chosen Difficulty" />
        </div>
        <p>
          You can view the lost sector rotation for the current season{" "}
          <Link href="/lostsectors/rotation">here</Link>.
        </p>
      </main>
    </>
  );
};

LostSectors.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default LostSectors;
