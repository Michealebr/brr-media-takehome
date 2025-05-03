import { useEffect, useState } from 'react';
import TicketCol from '../components/tickets-page-components/TicketCol';
import ticketData from '../data/tickets.json';
import Loading from '../components/Loading';
import Empty from '../components/Empty';

const TicketsPage = () => {
  type TicketData = {
    id: number;
    user: string;
    issue: string;
    description: string;
    status: string;
    created: string;
  };

  const [ticket, setTicket] = useState<TicketData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTicket(ticketData)
      setLoading(false)
    }, 1000)
  },[])

  const statuses = ['Backlog', 'Open', 'In Progress', 'Resolved'];

  if(loading){
    return <Loading />
  }

  if (!loading && ticket.length === 0){
    return <Empty message='No tickets found' />
  }
  
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
