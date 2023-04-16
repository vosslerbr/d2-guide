import Link from "next/link";
import { Card } from "primereact/card";
import { LinkTree } from "@/utils/linkTrees/types";

interface Props {
  linkTree: LinkTree[];
}

const LinkGrid = ({ linkTree }: Props) => {
  return (
    <div className="links-grid">
      {linkTree.map((link) => (
        <Link href={link.linksTo} key={link.linksTo}>
          <Card title={link.title}>
            <p>{link.description}</p>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default LinkGrid;
