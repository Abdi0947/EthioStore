import React, { useState } from 'react';

const headerLogo = "https://placehold.co/130x29?text=Quiz+Tracker";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Subjects", href: "#subjects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="px-6 py-8 absolute z-10 w-full bg-white">
      <nav className="flex justify-between items-center max-w-[1200px] mx-auto relative">
        <a href="/">
          <img src={headerLogo} alt="Quiz Tracker Logo" width={130} height={29} />
        </a>

        {/* Desktop menu */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href} 
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-blue-600 transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="hidden max-lg:block text-3xl cursor-pointer" onClick={toggleMenu}>
          <ion-icon name={menuOpen ? "close-outline" : "menu-outline"}></ion-icon>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 max-lg:flex max-lg:z-20">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  className="font-montserrat text-lg text-slate-gray hover:text-blue-600 transition"
                  onClick={() => setMenuOpen(false)} // close menu on click
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Nav;
