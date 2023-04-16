import Link from "next/link";
import { Card } from "primereact/card";

interface Props {
  linkTree: {
    title: string;
    description: string;
    linksTo: string;
    imageUrl: string;
  }[];
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
