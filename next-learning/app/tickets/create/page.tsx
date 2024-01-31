import { NextPage } from "next";
import React from "react";
import CreateForm from "./CreateForm";

export const metadata: { title: string } = {
  title: "Create Ticket",
};

const CreateTickets: NextPage = () => {
  return (
    <main>
      <h2 className="text-primary text-center">Add a New Ticket</h2>
      <CreateForm />
    </main>
  );
};

export default CreateTickets;
