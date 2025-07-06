import React from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import { NAV_LINKS } from '../../constants';

const Navbar: React.FC = () => {
  const linkClass = "px-4 py-2 text-stone-600 hover:text-amber-800 transition-colors duration-300";
  const activeLinkClass = "text-amber-800 font-semibold";

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex items-center justify-between p-4 bg-stone-50/80 backdrop-blur-sm sticky top-0 z-50 border-b border-stone-200">
        <Link to="/" className="text-2xl font-bold text-stone-800 flex items-center">
          <img src="/images/zenrootfeet.webp" alt="ZenRootFeet Logo" className="h-10 w-10 mr-2" />
          zenrootfeet.life
        </Link>
        <div className="flex items-center space-x-4">
          {NAV_LINKS.map(link => (
            <RouterNavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`}
            >
              {link.name}
            </RouterNavLink>
          ))}
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-center p-4 bg-stone-50 sticky top-0 z-40 border-b border-stone-200">
        <Link to="/" className="text-xl font-bold text-stone-800 flex items-center">
          <img src="/images/zenrootfeet.webp" alt="ZenRootFeet Logo" className="h-8 w-8 mr-2" />
          zenrootfeet.life
        </Link>
      </div>

      {/* Mobile Bottom Navbar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-stone-50/90 backdrop-blur-sm border-t border-stone-200 flex justify-around p-2 z-50">
        {NAV_LINKS.map(link => (
          <RouterNavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => `flex flex-col items-center text-xs w-1/4 ${isActive ? 'text-amber-800' : 'text-stone-600'}`}
          >
            <span className="text-2xl">{link.emoji}</span>
            <span className="mt-1">{link.name}</span>
          </RouterNavLink>
        ))}
      </nav>
      {/* Spacer for bottom nav */}
      <div className="md:hidden h-20"></div>
    </>
  );
};

export default Navbar;