import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const NotFound: NextPage = () => {
  return (
    <main className="text-center">
      <h2 className="text-4xl">We Hit a Brick Wall.</h2>
      <p>We could not find the ticket you were looking for.</p>
      <p>
        Go back to all <Link href="/tickets">Tickets</Link>
      </p>
    </main>
  );
};

export default NotFound;
