"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';

const navLinks = [
  {
      title: "Über uns",
      path: "#about",
  },
  {
    title: "Projekte",
    path: "#web3onboarding",
  },
  {
    title: "Kontakt",
    path: "#kontakt",
  }
]

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // Funktion zum Schließen des Menüs
  const closeNavbar = () => setNavbarOpen(false);

  return (
    <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-100'>
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto pl-2 pr-4 pb-2 pt-2 md:pl-8 md:pr-8 md:pt-8">
        <Link href="/" className="text-3xl text-white font-semibold">
          <div>JP Caravans</div>
        </Link>
        <div className='mobile-menu block md:hidden'>
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className='flex md:p-0 md:flex-row md:space-x-8 mt-0'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay 
          links={navLinks}
          onLinkClick={closeNavbar} // Hier übergeben wir die closeNavbar Funktion
        />
      ) : null}
    </nav>
  );
}

export default Navbar;
