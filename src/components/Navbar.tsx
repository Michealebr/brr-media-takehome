import React from "react";
import { Link } from "react-router-dom";
import Roles from "../assets/user.svg"
import Staff from "../assets/users-round.svg"
import Tickets from "../assets/tickets.svg"
import CreateTicket from "../assets/ticket-plus.svg"
import Todo from "../assets/list-checks.svg"
import Mo from "../assets/Mo-pp.png";
import Home from "../assets/house.svg";

const Navbar = () => {
  return (
    <div className=" z-4 flex flex-col w-[300px] bg-[var(--secondary-color)] m-4 border-radius rounded-lg gap-[10rem] fixed top-1 bottom-1">
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
        <div className="flex flex-col gap-y-8 text-sm">
          <Link to="/" className="flex items-center ">
            <img className="mr-4 h-[18px] " src={Home} alt="home icon" />
            Home
          </Link>
          <Link to="/staff" className="flex items-center">
            <img className="mr-4 h-[18px]" src={Staff} alt="home icon" />
            Staff
          </Link>
          <Link to="/create-ticket" className="flex items-center">
            <img className="mr-4 h-[18px]" src={CreateTicket} alt="home icon" />
            Create Ticket
          </Link>
          <Link to="ticket-page" className="flex items-center">
            <img className="mr-4 h-[18px]" src={Tickets} alt="home icon" />
            {/* conditionally render Ticket History or Tickets for admin */}
            Tickets Page 
          </Link>
          <Link to="to-do-list" className="flex items-center">
            <img className="mr-4 h-[18px]" src={Todo} alt="home icon" />
            To-Do List
          </Link>
        </div>
        <div className="text-sm flex">
        <img className="mr-4 h-[18px]" src={Roles} alt="home icon" />
            {/* drop down button for role */}Select Role
        </div>
      </div>
    </div>
  );
};

export default Navbar;
