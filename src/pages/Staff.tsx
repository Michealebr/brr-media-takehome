import { useEffect, useState } from 'react';
import StaffCardComponent from '../components/staff-components/StaffCardComponent';
import staffData from '../data/staff.json';
import Loading from '../components/Loading';
import Empty from '../components/Empty';

const Staff = () => {
  type StaffMember = {
    id: number;
    name: string;
    role: string;
    email: string;
    status: string;
    lastLogin: string;
    driveUsage: string;
    device: string;
  };

  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStaff(staffData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!loading && staff.length === 0) {
    return <Empty message="No staff members found" />;
  }

  return (
    <>
      <div className="font-bold text-5xl font-title mb-10 ">
        Staff
        <span className="ml-10 font-thin text-lg text-gray-500">
          {staff.length}
        </span>
      </div>
      <div className="grid g gap-4   grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] ">
        {staff.map((person) => (
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
