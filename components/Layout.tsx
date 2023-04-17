import Link from "next/link";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <div id="nav-inner">
          <Link href="/">
            <h1>D2 Compendium</h1>
          </Link>
        </div>
      </nav>
      {children}
      <footer>
        <p>
          &copy; {new Date().getFullYear()} -{" "}
          <a href="https://twitter.com/kindofsticky" target="_blank">
            @kindofsticky
          </a>{" "}
          🤠
        </p>
        <p>Destiny 2 and all related content &copy; Bungie</p>
      </footer>
    </>
  );
}
