// import { Link } from 'react-router-dom';

// function NavbarAtom({ menuItems }) {
//   return (
//     <nav>
//       <ul>
//         {menuItems.map((item, index) => (
//           <li key={index}>
//             <Link to={item.url}>{item.label}</Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// export default NavbarAtom;

// import { Link } from 'react-router-dom';
// import { useState } from 'react'; // Importa useState

// function NavbarAtom({ menuItems }) {
//   const [isOpen, setIsOpen] = useState(false); // Agrega el estado para el menú

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-blue-500 p-4">
//       <div className="max-w-7xl mx-auto flex justify-around items-center">
//         {/* <div className="flex-shrink-0">
//           <a href="#" className="text-white text-lg font-semibold">
//             Mi Sitio
//           </a>
//         </div> */}
//         <div className="hidden md:flex space-x-4">
//           {menuItems.map((item, index) => (
//             <Link
//               key={index}
//               to={item.url}
//               className="text-white hover:underline"
//             >
//               {item.label}
//             </Link>
//           ))}
//         </div>
//         <div className="md:hidden">
//           <button
//             className="text-white focus:outline-none"
//             onClick={toggleMenu}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {isOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {menuItems.map((item, index) => (
//               <Link
//                 key={index}
//                 to={item.url}
//                 className="text-white block hover:underline"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default NavbarAtom;

// import { Link } from 'react-router-dom';
// import { useState } from 'react';

// function NavbarAtom({ menuItems }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-blue-500 p-4">
//       <div className="max-w-7xl mx-auto flex justify-around items-center">
//         <div className="hidden md:flex space-x-0">
//           {menuItems.map((item, index) => (
//             <Link
//               key={index}
//               to={item.url}
//               className={`relative text-black hover:underline ${
//                 isOpen ? 'ml-0' : `ml-${index === 0 ? '0' : '1'}`
//               }`}
//             >
//               <span
//                 className={`border rounded-t-md px-4 py-1 group-hover:bg-orange-500 group-hover:text-black ${
//                   isOpen ? 'bg-orange-500 text-black' : 'bg-transparent text-blue-500'
//                 }`}
//               >
//                 {item.label}
//               </span>
//               <span
//                 className={`absolute bottom-0 left-0 w-full h-0.5 ${
//                   isOpen ? 'bg-orange-500' : 'bg-blue-500'
//                 }`}
//               ></span>
//             </Link>
//           ))}
//         </div>
//         <div className="md:hidden">
//           <button
//             className="text-white focus:outline-none"
//             onClick={toggleMenu}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {isOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {menuItems.map((item, index) => (
//               <Link
//                 key={index}
//                 to={item.url}
//                 className="text-black block hover:underline"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default NavbarAtom;

import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavbarAtom({ menuItems }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-2 fixed top-0 left-0 right-0 z-10 flex justify-end ">
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
          {menuItems.map((item, index) => (
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
