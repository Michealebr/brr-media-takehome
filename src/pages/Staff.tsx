import React from "react";
import StaffCardComponent from "../components/staff-components/StaffCardComponent";
import staffData from "../data/staff.json";

const Staff = () => {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  xl:grid-cols-4 gap-6">
    {staffData.map((person) => (
        <StaffCardComponent
          id={person.id}
          name={person.name}
          role={person.role}
          email={person.email}
          status={person.status}
          lastLogin={person.lastLogin}
          driveUsage={person.driveUsage}
          device={person.device}
        />
      ))}
    </div>
      
    </>
  );
};

export default Staff;
