import React from "react";
import Mo from "../../assets/Mo-pp.png";

interface StaffProps {
  id: number;
  name: string;
  role: string;
  email: string;
  status: string;
  lastLogin: string;
  driveUsage: string;
  device: string


}


const StaffCardComponent: React.FC<StaffProps> = ({ id, name, role, email, status, lastLogin, driveUsage, device}) => {

  const [date, timeWithZ] = lastLogin.split('T',)
  const time = timeWithZ.replace('Z', '').slice(0, -3)

  // format date to english dd/mm/yyyy
  const [year, month, day] = date.split('-')
  const formattedDate = `${day}-${month}-${year}`
  // color status map to show who's Active , busy or offline
  const statusColorMap: { [key: string]: string } = {
    active: "bg-green-500",
    busy: "bg-red-500",
    offline: "bg-gray-400",
  };
  // matches to the corresponding bg color, if not found sets to gray
  const statusColor = statusColorMap[status.toLowerCase()] || "bg-gray-400";

  return (
    <div className="bg-[var(--secondary-color)] w-[300px]  rounded-xl px-5 py-3 text-sm relative shadow" key={id} >
      <div className=" flex pb-2  items-center">
        <div className="w-[60px]">
          <img className="h-[50px]" src={Mo} alt="staff profile picture" />
        </div>
        <div className="">
          <p>{name}</p>
          <p className="font-bold">{role}</p>
        </div>
        <div className={`absolute top-4 right-4 h-[10px] w-[10px] rounded-full ${statusColor}`}></div>
      </div>
      <div className="">{email}</div>

      {/* only admin should see */}

      <div className="border-b border-gray-300 p-1"></div>
      <div className="text-xs py-2">
        <div className=""><span className="font-bold">Last login</span> : {time} | {formattedDate}</div>
        <div className=""><span className="font-bold">Usage</span> : {driveUsage}</div>
        <div className=""><span className="font-bold">Device</span> : {device}</div>
      </div>
    </div>
  );
};

export default StaffCardComponent;
