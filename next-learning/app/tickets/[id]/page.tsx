import { NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { notFound } from "next/navigation";

export const metadata: { title: string } = {
  title: "Ticket Detail Page",
};

interface TicketParams extends ParsedUrlQuery {
  id: string;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const res = await fetch(`http://localhost:4000/tickets`);

  const tickets = await res.json();

  return tickets.map((ticket: Ticket) => ({
    id: ticket.id,
  }));
}

async function getTicket(id: string) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    notFound();
  }
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
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
};

export default TicketDetails;
