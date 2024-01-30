import { NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";

interface TicketParams extends ParsedUrlQuery {
  id: string;
}

async function getTicket(id: string) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
}

const TicketDetails: NextPage<{ params: TicketParams }> = async ({
  params,
}) => {
  const ticket = await getTicket(params.id);
  return (
    <main>
      <nav>
        <h2>TicketDetails</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {" "}
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
};

export default TicketDetails;
