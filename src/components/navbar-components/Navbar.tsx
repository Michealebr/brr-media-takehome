import { useEffect, useRef, useState } from 'react';
import Roles from '../../assets/user.svg';
import Staff from '../../assets/users-round.svg';
import Tickets from '../../assets/tickets.svg';
import CreateTicket from '../../assets/ticket-plus.svg';
import Todo from '../../assets/list-checks.svg';
import Mo from '../../assets/Mo-pp.png';
import Home from '../../assets/house.svg';
import NavbarLinks from './NavbarLinks';
import Menu from '../../assets/panel-left-dashed.svg';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setNavOpen(false);
      }
    };

    if (navOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navOpen]);

  return (
    <>
      <div className="lg:hidden z-10  flex  items-center px-5 fixed border-b absolute border-gray-300 w-full h-[40px] bg-[var(--primary-color)]">
        <button
          className="cursor-pointer group mr-5 relative"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className="absolute left-0 -translate-x-0 top-full mt-1 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap">
            Open sidebar
          </span>
          <img className="w-4" src={Menu} alt="Open sidebar" />
        </button>
        <div className="font-bold text-sm">BRR Media Dashboard </div>
      </div>

      <div className="hidden lg:flex  z-4 flex flex-col w-[300px] bg-[var(--secondary-color)] m-4 border-radius rounded-lg gap-[10rem] fixed top-1 bottom-1">
        {/* profile */}
        <div className="flex p-5 items-center">
          <img
            className="w-8 mr-4 rounded-full"
            src={Mo}
            alt="user profile picture"
          />
          <p className="text-sm">mvirji@brrmedia.co.uk</p>
        </div>
        {/* ctn for links and admin change */}
        <div className="px-6 flex flex-col gap-[10rem]">
          <div className="flex flex-col gap-y-4 text-sm">
            <NavbarLinks link="/" src={Home} alt="Home icon" title="Home" />
            <NavbarLinks
              link="/staff"
              src={Staff}
              alt="Staff icon"
              title="Staff"
            />
            <NavbarLinks
              link="/create-ticket"
              src={CreateTicket}
              alt="Tickets icon"
              title="Create Ticket"
            />
            <NavbarLinks
              link="/ticket-page"
              src={Tickets}
              alt="Tickets icon"
              title="Ticket Page"
            />
            <NavbarLinks
              link="to-do-list"
              src={Todo}
              alt="To-Do icon"
              title="To-Do List"
            />
          </div>
          <div className="text-sm flex">
            <img className="mr-4 h-[18px]" src={Roles} alt="home icon" />
            {/* drop down button for role */}Select Role
          </div>
        </div>
      </div>

      <div
        ref={navRef}
        className={`lg:hidden shadow fixed top-0 left-0 bottom-0 z-50  w-[200px] sm:w-[300px] bg-[var(--secondary-color)] rounded-lg gap-[10rem] transform transition-transform duration-300 ease-in-out flex flex-col ${
          navOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* profile */}
        <div className="flex p-5 items-center">
          <img
            className="w-8 mr-4 rounded-full"
            src={Mo}
            alt="user profile picture"
          />
          <p className="text-sm hidden sm:flex">mvirji@brrmedia.co.uk</p>
        </div>
        {/* ctn for links and admin change */}
        <div className="px-6 flex flex-col gap-[10rem]">
          <div className="flex flex-col gap-y-4 text-sm">
            <NavbarLinks
              link="/"
              src={Home}
              alt="Home icon"
              title="Home"
              onClickFunc={() => setNavOpen(false)}
            />

            <NavbarLinks
              link="/staff"
              src={Staff}
              alt="Staff icon"
              title="Staff"
              onClickFunc={() => setNavOpen(false)}
            />
            <NavbarLinks
              link="/create-ticket"
              src={CreateTicket}
              alt="Tickets icon"
              title="Create Ticket"
              onClickFunc={() => setNavOpen(false)}
            />
            <NavbarLinks
              link="/ticket-page"
              src={Tickets}
              alt="Tickets icon"
              title="Ticket Page"
              onClickFunc={() => setNavOpen(false)}
            />
            <NavbarLinks
              link="to-do-list"
              src={Todo}
              alt="To-Do icon"
              title="To-Do List"
              onClickFunc={() => setNavOpen(false)}
            />
          </div>
          <div className="text-sm flex">
            <img className="mr-4 h-[18px]" src={Roles} alt="home icon" />
            {/* drop down button for role */}Select Role
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
