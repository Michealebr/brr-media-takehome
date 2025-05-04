import React, { useState } from 'react';

interface TicketCardProps {
  ticket: {
    id: number;
    user: string;
    issue: string;
    description: string;
    status: string;
    created: string;
  };
}

const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  const [expanded, setExpand] = useState(false);
  const [date, timeWithZ] = ticket.created.split('T');
  const time = timeWithZ.replace('Z', '').slice(0, -3);

  // format date to english dd/mm/yyyy
  const [year, month, day] = date.split('-');
  const formattedDate = `${day}-${month}-${year}`;
  // color status map to show completion
  const statusColorMap: { [key: string]: string } = {
    resolved: 'bg-green-500',
    inprogress: 'bg-orange-500',
    open: 'bg-red-500',
  };
  // gets rid of spaces and upper case matches to the corresponding text color, if not found sets to gray
  const statusKey = ticket.status.toLowerCase().replace(/\s+/g, '');
  const statusColor = statusColorMap[statusKey.toLowerCase()] || 'bg-gray-400';

  return (
    <div
      onClick={() => setExpand(!expanded)}
      className="cursor-pointer transition-all duration-300 bg-white hover:bg-gray-50 relative shadow mb-2 w-full  p-3 rounded-xl bg-[var(--primary-color)]"
    >
      <div className="flex flex-col">
        <div className="text-[10px] font-bold text-gray-500 mb-.5">
          BRR-{ticket.id}
        </div>
        <div className=" flex items-center ">
          <div
            className={`h-[6px] w-[6px] ${statusColor} rounded-full mr-2`}
          ></div>
          <h5 className=" text-[12px]">{ticket.issue}</h5>
        </div>
        <h6 className=" text-[10px] text-gray-500 ">{ticket.user}</h6>
        {expanded && (
          <p className="mt-1 mb-6 text-gray-700 text-[12px]">
            {ticket.description}
          </p>
        )}
        <div className="absolute bottom-2.5 right-3 text-[10px] font-bold text-gray-500">
          {time} - {formattedDate}
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
