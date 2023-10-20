import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavbarAtom({ menuItems }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-2 md:block md:fixed md:top-16 md:right-0 z-10 flex justify-end">
      <div className="max-w-7xl">
        <div className="md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div className={`md:flex space-x-0 ${isOpen ? 'flex-col' : 'hidden'} md:block`}>
          {menuItems && menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.url}
              className={`relative text-white ${
                isOpen ? '' : `ml-${index === 0 ? '0' : '2'}`
              }`}
            >
              {isOpen ? (
                <div className="bg-orange-500 hover:bg-orange-400 px-4 py-2">
                  {item.label}
                </div>
              ) : (
                <div className="ml-[-10px] border-white border-solid border-2 w-auto bg-orange-500 hover:bg-orange-400 px-8 py-2 rounded-tl-2xl shadow-lg">
                  {item.label}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavbarAtom;

