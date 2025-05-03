import React from 'react';

interface TableProps {
  id: number;
  email: string;
  issue: string;
  status: string;
}

const TableCellComponent: React.FC<TableProps> = ({
  id,
  email,
  issue,
  status,
}) => {
  const statusColorMap: { [key: string]: string } = {
    resolved: 'text-green-500',
    inprogress: 'text-orange-500',
    open: 'text-red-500',
  };
  // gets rid of spaces and upper case matches to the corresponding text color, if not found sets to gray
  const statusKey = status.toLowerCase().replace(/\s+/g, '');
  const statusColor = statusColorMap[statusKey] || 'text-gray-400';

  return (
    <tr key={id}>
      <td className="px-4 py-3">
        <p className="font-medium text-gray-900">{email}</p>
      </td>
      <td className="px-4 py-3">{issue}</td>
      <td className={`px-4 py-3 ${statusColor} font-semibold`}>{status}</td>
    </tr>
  );
};

export default TableCellComponent;
