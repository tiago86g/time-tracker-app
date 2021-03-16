import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import './Navbar.css';

interface NavbarProps {
  users: Users[];
}

export const Navbar: React.FC<NavbarProps> = ({ users }) => {
  const [isOpen, setIsOpen] = useState(false);
  const showDropdown = () => setIsOpen(!isOpen);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <IoIcons.IoMdPeople onClick={showDropdown} />
          </Link>
        </div>
        <nav className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showDropdown}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {users.map((item) => {
              return (
                <li key={item.id} className={'nav-text'}>
                  <Link to={`id${item.id}`}>
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};
