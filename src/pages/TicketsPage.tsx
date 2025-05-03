import React from 'react';
import TicketCol from '../components/tickets-page-components/TicketCol';
import ticketData from '../data/tickets.json';

const TicketsPage = () => {
  const statuses = ['Backlog', 'Open', 'In Progress', 'Resolved'];

  return (
    <div className="flex max-h-full w-full max-w-[2000px] overflow-x-auto scrollbar-custom ">
      {statuses.map((status) => (
        <TicketCol
          key={status}
          title={status}
          tickets={ticketData.filter((t) => t.status === status)}
        />
      ))}
    </div>
  );
};

export default TicketsPage;
