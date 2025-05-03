import TableCellComponent from "../table-components/TableCellComponent";
import ticketData from "../../../data/tickets.json";

const TableComponent = () => {
  return (
    <table className="min-w-[800px] divide-y divide-gray-200 w-full">
      <thead className=" text-left">
        <tr>
          <th className="px-4 py-2 text-sm font-semibold ">User</th>
          <th className="px-4 py-2 text-sm font-semibold text-gray-700 ">
            Ticket Problem
          </th>
          <th className="px-4 py-2 text-sm font-semibold text-gray-700 ">
            Status
          </th>
        </tr>
      </thead>
      <tbody className=" divide-y divide-gray-200 text-sm">
        {ticketData.slice(0, 5).map((ticket) => (
          <TableCellComponent
            id={ticket.id}
            email={ticket.user}
            issue={ticket.issue}
            status={ticket.status}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
