import HomeCardComponent from '../components/home-components/HomeCardComponent';
import { Link } from 'react-router-dom';
import LinkIcon from '../assets/square-arrow-out-up-right.svg';
import TableComponent from '../components/home-components/table-components/TableComponent';
import { useUser } from '../context/UserContext';

const Home = () => {
    const {role} = useUser();

  return (
    <div className="flex flex-col gap-20 ">
      <div className="bg-[var(--secondary-color)] p-5 rounded-xl text-center ">
        <h1 className="text-2xl font-bold mb-1">Welcome back, {role} 👋</h1>
        <p className="text-sm text-gray-500 ">
          Here’s a quick overview of what’s happening across the system today.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <HomeCardComponent subheading="Tickets Not Started" number="5" />
        <HomeCardComponent subheading="Tickets In Progress" number="12" />
        <HomeCardComponent subheading="Tickets Completed" number="34" />
      </div>
      <div className="">
        <div className="text-3xl font-bold flex mb-5 flex-col sm:flex-row">
          Recent Requests
          <Link
            className="flex text-sm text-[var(--accent-color)] sm:ml-auto align-center items-center"
            to={'/ticket-page'}
          >
            View all Requests
            <img className="ml-2 h-[15px]" src={LinkIcon} alt="arrow" />
          </Link>
        </div>
        <div className="w-full overflow-x-auto scrollbar-custom ">
          <TableComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
