import Head from "next/head";
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/Layout";
import { ReactElement } from "react";
import { Chip } from "primereact/chip";
import LinkGrid from "@/components/LinkGrid";
import linkTree from "@/utils/linkTrees/crucibleLinkTree";

const Crucible: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>D2 Compendium | The Crucible</title>
        <meta name="description" content="D2 Player Guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>The Crucible</h1>
        <div className="chips">
          <Chip label="PvP" />
        </div>
        <LinkGrid linkTree={linkTree} />
      </main>
    </>
  );
};

Crucible.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Crucible;
