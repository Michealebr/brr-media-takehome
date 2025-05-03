import React from "react";
import TicketCard from "./TicketCard";

interface TicketColProps {
  key: string;
  title: string;
  tickets: {
    id: number;
    user: string;
    issue: string;
    description: string;
    status: string;
    created: string;
  }[];
}

const TicketCol: React.FC<TicketColProps> = ({ key, title, tickets }) => {

  const ticketAmount = tickets.length

  const statusColorMap: { [key: string]: string } = {
    resolved: "bg-green-500",
    inprogress: "bg-orange-500",
    open: "bg-red-500",
  };
  // gets rid of spaces and upper case matches to the corresponding text color, if not found sets to gray
  const statusKey = title.toLowerCase().replace(/\s+/g, "");
  const statusColor = statusColorMap[statusKey.toLowerCase()] || "bg-gray-400";


  return (
    <div
      key={key}
      className=" min-w-[270px] sm:min-w-[300px] flex flex-col w-full px-2 py-3 mx-1  rounded-sm bg-[var(--secondary-color)]"
    >
      <div className="flex items-center text-sm mb-4 ">
        <div className={`h-[10px] w-[10px] ${statusColor} rounded-full mr-2`}></div>
        <h4 className="mr-3">{title}</h4>
        <div className="text-xs text-gray-400">{ticketAmount}</div>
      </div>
      <div className="h-screen overflow-y-auto scrollbar-custom">
        <div className="mr-2">
          {tickets.map((ticket)=> (
            <TicketCard
            key={ticket.id}
            ticket={ticket}
            />
          ))}
        </div>
      </div>
      <div className="overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"></div>
    </div>
  );
};

export default TicketCol;
