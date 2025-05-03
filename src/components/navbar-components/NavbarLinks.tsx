import React from 'react';
import { Link } from 'react-router-dom';

interface navbarLinkProps {
  link: string;
  src: any;
  alt: string;
  title: string;
  onClickFunc?: any;
}

const NavbarLinks: React.FC<navbarLinkProps> = ({
  link,
  src,
  alt,
  title,
  onClickFunc,
}) => {
  return (
    <Link to={link} className="flex items-center py-2" onClick={onClickFunc}>
      <img className="mr-4 h-[18px] " src={src} alt={alt} />
      <span>{title}</span>
    </Link>
  );
};

export default NavbarLinks;
