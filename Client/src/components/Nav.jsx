import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const headerLogo = "https://placehold.co/130x29?text=Quiz+Tracker";

const navLinks = [
  { label: "Home", to: "/home" },
  { label: "Subjects", to: "/subjects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleLoginForm = () => {
    setShowLogin(!showLogin);
    setShowSignup(false); // Close signup form when opening login
  };

  const toggleSignupForm = () => {
    setShowSignup(!showSignup);
    setShowLogin(false); // Close login form when opening signup
  };

  return (
    <header className="px-6 py-8 absolute z-10 w-full bg-white">
      <nav className="flex justify-between items-center max-w-[1200px] mx-auto relative">
        <Link to="/">
          <img src={headerLogo} alt="Quiz Tracker Logo" width={130} height={29} />
        </Link>

        {/* Desktop menu */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link 
                to={item.to} 
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-blue-600 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <button onClick={toggleLoginForm} className="text-lg text-slate-gray hover:text-blue-600 transition">
              Login
            </button>
          </li>
          <li>
            <button onClick={toggleSignupForm} className="text-lg text-slate-gray hover:text-blue-600 transition">
              Signup
            </button>
          </li>
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
                <Link 
                  to={item.to} 
                  className="font-montserrat text-lg text-slate-gray hover:text-blue-600 transition"
                  onClick={() => setMenuOpen(false)} // close menu on click
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button onClick={toggleLoginForm} className="text-lg text-slate-gray hover:text-blue-600 transition">
                Login
              </button>
            </li>
            <li>
              <button onClick={toggleSignupForm} className="text-lg text-slate-gray hover:text-blue-600 transition">
                Signup
              </button>
            </li>
          </ul>
        )}
      </nav>

      {/* Login Form */}
      {showLogin && (
  <div className="fixed inset-0 bg-black bg-opacity-40 z-40 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
      <h3 className="text-xl mb-4 text-center font-semibold">Login</h3>
      <form>
        <div className="mb-4">
          <label className="block text-lg">Email</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-lg">Password</label>
          <input type="password" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div className="flex justify-center gap-4">
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Login</button>
          <button type="button" onClick={toggleLoginForm} className="px-4 py-2 bg-gray-400 text-white rounded">Close</button>
        </div>
      </form>
    </div>
  </div>

      )}

      {/* Signup Form */}
      {showSignup && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-30">
          <h3 className="text-xl mb-4">Sign Up</h3>
          <form>
            <div className="mb-4">
              <label className="block text-lg">Email</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-lg">Password</label>
              <input type="password" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="flex justify-center gap-4">
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Sign Up</button>
              <button type="button" onClick={toggleSignupForm} className="px-4 py-2 bg-gray-400 text-white rounded">Close</button>
            </div>
          </form>
        </div>
      )}
    </header>
  );
};

export default Nav;
