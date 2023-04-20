import React, { useState, createContext, useEffect } from "react";
import { ProgressSpinner } from "primereact/progressspinner";

export type UserContextType = {
  user: {
    destinyMemberships: any[];
    primaryMembershipId: string;
    bungieNetUser: any;
    responseMintedTimestamp: string;
    secondaryComponentsMintedTimestamp: string;
    characters: any;
  };
};

export const UserContext = createContext<UserContextType | null>(null);

type Props = {
  children: JSX.Element;
};

export default function Store({ children }: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getManifest = async () => {
      console.time("load defs");

      const { setApiKey, verbose, loadDefs, includeTables } = await import("@d2api/manifest-web");

      setApiKey("995db4bb196a42fb8b7426f61f6c8e6e");
      verbose();
      includeTables(["InventoryItem", "Activity", "ActivityModifier", "Collectible"]);

      await loadDefs();

      setLoading(false);

      console.timeEnd("load defs");
    };

    getManifest();
  }, []);

  // TODO - make this a component and improve if needed
  const loadingScreen = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}>
      <h2>Loading Destiny 2 Compendium...</h2>
      <ProgressSpinner />
    </div>
  );

  return <>{loading ? loadingScreen : children}</>;
}
