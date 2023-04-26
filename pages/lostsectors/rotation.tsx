import Head from "next/head";
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/Layout";
import { ReactElement, useEffect, useState } from "react";
import { LostSectorDay } from "@prisma/client";
import axios from "axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import dayjs from "dayjs";

const LostSectorRotation: NextPageWithLayout = () => {
  const [lostSectors, setLostSectors] = useState<LostSectorDay[]>([]);

  useEffect(() => {
    const fetchLostSectors = async () => {
      const res = await axios.get("/api/lost-sector");

      // filter out any that are past
      const now = dayjs();
      const filtered = res.data.filter((ls: LostSectorDay) => {
        return dayjs(ls.endsAt).isAfter(now);
      });

      setLostSectors(filtered);
    };

    fetchLostSectors();
  }, []);

  const startDateTemplate = (lostSectorDay: LostSectorDay) => {
    return dayjs(lostSectorDay.startsAt).format("MM/DD/YYYY hh:mm a");
  };
  const endDateTemplate = (lostSectorDay: LostSectorDay) => {
    return dayjs(lostSectorDay.endsAt).format("MM/DD/YYYY hh:mm a");
  };

  const rowClass = (data: LostSectorDay) => {
    return {
      "bg-primary": dayjs(data.startsAt).isBefore(dayjs()) && dayjs(data.endsAt).isAfter(dayjs()),
    };
  };

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
        <p>Today&apos;s lost sector will always be highlighted right at the top of this table</p>
        <DataTable value={lostSectors} rowClassName={rowClass}>
          <Column field="name" header="Name"></Column>
          <Column field="rewardType" header="Reward"></Column>
          <Column field="startsAt" header="Starts" body={startDateTemplate}></Column>
          <Column field="endsAt" header="Ends" body={endDateTemplate}></Column>
        </DataTable>
      </main>
    </>
  );
};

LostSectorRotation.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default LostSectorRotation;
