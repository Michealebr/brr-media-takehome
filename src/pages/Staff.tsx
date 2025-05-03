import React from 'react';
import StaffCardComponent from '../components/staff-components/StaffCardComponent';
import staffData from '../data/staff.json';

const Staff = () => {
  return (
    <>
      <div className="font-bold text-5xl font-title mb-10 ">
        Staff
        <span className="ml-10 font-thin text-lg text-gray-500">
          {staffData.length}
        </span>
      </div>
      <div className="grid g gap-4   grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] ">
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
