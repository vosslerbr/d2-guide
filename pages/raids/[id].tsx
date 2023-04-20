import Head from "next/head";
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/Layout";
import { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { DestinyActivityDefinition } from "bungie-api-ts/destiny2";
import Image from "next/image";

const Raid: NextPageWithLayout = () => {
  const router = useRouter();

  const { id } = router.query;

  const [raid, setRaid] = useState<DestinyActivityDefinition | undefined>(undefined);

  useEffect(() => {
    const fetchLostSectors = async () => {
      const { getActivityDef } = await import("@d2api/manifest-web");
      const activity = getActivityDef(Number(id));

      setRaid(activity);
    };

    fetchLostSectors();
  }, [id]);

  return (
    <>
      <Head>
        <title>D2 Compendium | {raid?.originalDisplayProperties.name}</title>
        <meta name="description" content="D2 Player Guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {raid ? (
          <>
            <div
              className="section-card-detail "
              style={{
                backgroundImage: `url(https://www.bungie.net${raid.pgcrImage})`,
              }}>
              <h1>{raid.originalDisplayProperties.name}</h1>
            </div>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </main>
    </>
  );
};

Raid.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Raid;
