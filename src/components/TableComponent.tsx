import React from 'react'
import TableCellComponent from './TableCellComponent'
import ticketData from '../data/tickets.json'

const TableComponent = () => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
  <thead className=" text-left">
    <tr>
      <th className="px-4 py-2 text-sm font-semibold ">User</th>
      <th className="px-4 py-2 text-sm font-semibold text-gray-700">Ticket Problem</th>
      <th className="px-4 py-2 text-sm font-semibold text-gray-700">Status</th>
    </tr>
  </thead>
  <tbody className=" divide-y divide-gray-200 text-sm">
    
 {ticketData.map((ticket) => (
    <TableCellComponent 
    id={ticket.id}
    email={ticket.user}
    issue={ticket.issue}
    status={ticket.status}

    />
 ))}


   {/* <tr>
      <td className="px-4 py-3">
        <p className="font-medium text-gray-900">Alice Smith</p>
        <p className="text-gray-500 text-xs">alice@brrmedia.co.uk</p>
      </td>
      <td className="px-4 py-3">Login issues on CMS</td>
      <td className="px-4 py-3 text-yellow-600 font-semibold">In Progress</td>
    </tr> */}
    {/* <tr>
      <td className="px-4 py-3">
        <p className="font-medium text-gray-900">Mohamed Virji</p>
        <p className="text-gray-500 text-xs">mvirji@brrmedia.co.uk</p>
      </td>
      <td className="px-4 py-3">Upload failing</td>
      <td className="px-4 py-3 text-green-600 font-semibold">Resolved</td>
    </tr>
    <tr>
      <td className="px-4 py-3">
        <p className="font-medium text-gray-900">Jessica Lee</p>
        <p className="text-gray-500 text-xs">jessica@brrmedia.co.uk</p>
      </td>
      <td className="px-4 py-3">Permissions error</td>
      <td className="px-4 py-3 text-red-600 font-semibold">Open</td>
    </tr>
    <tr>
      <td className="px-4 py-3">
        <p className="font-medium text-gray-900">Tom Rivers</p>
        <p className="text-gray-500 text-xs">tom@brrmedia.co.uk</p>
      </td>
      <td className="px-4 py-3">Cannot reset password</td>
      <td className="px-4 py-3 text-yellow-600 font-semibold">In Progress</td>
    </tr>
    <tr>
      <td className="px-4 py-3">
        <p className="font-medium text-gray-900">Natalie Green</p>
        <p className="text-gray-500 text-xs">natalie@brrmedia.co.uk</p>
      </td>
      <td className="px-4 py-3">Page not loading</td>
      <td className="px-4 py-3 text-red-600 font-semibold">Open</td>
    </tr> */}
  </tbody>
</table>
  )
}

export default TableComponent