import Head from "next/head";
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/Layout";
import { ReactElement } from "react";
import LinkGrid from "@/components/LinkGrid";
import linkTree from "@/utils/linkTrees/strikesLinkTree";
import { Chip } from "primereact/chip";

const PlaylistStrikes: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>D2 Guide | Playlist Strikes</title>
        <meta name="description" content="D2 Player Guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Playlist Strikes</h1>
        <div className="chips">
          <Chip label="PvE" />
          <Chip label="Playlist" />
          <Chip label="Fixed Difficulty" />
          <Chip label="Matchmade" />
        </div>
        <p>
          Randomly selected strikes from the Vanguard Strike playlist. The difficulty of the strike
          is fixed and you&apos;ll be matched with other players if your fireteam is not full.
        </p>
        <p>
          Playlist strikes are at a -5 difficulty delta from hard cap. See <a href="#">here</a> for
          more details on difficulty deltas.
        </p>
      </main>
    </>
  );
};

PlaylistStrikes.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default PlaylistStrikes;
