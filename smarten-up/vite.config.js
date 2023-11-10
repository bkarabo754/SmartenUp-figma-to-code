import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


// import React, { useState } from "react";
// import IconBag from "../assets/iconbag.png";
// import NewLogo from "../assets/newLogo.jpg";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { navLinks } from "../constants";

// const Nav = () => {
//   const [open, setOpen] = useState(false);

//   const handleMenu = () => {
//     setOpen((prev) => !prev);
//   };

//   return (
//     <nav className="w-full flex py-6 justify-between items-center navbar">
//       <div className="flex items-center justify-between">
//         <div className="lg:ml-[60px] lg:mt-6">
//           <img
//             src={NewLogo}
//             alt="SmartUp Logo"
//             className="w-10 h-10 rounded-full mt-2 lg:mt-4 object-contain md:ml-0 md:mr-10"
//           />
//         </div>
//         <div className="mt-3 lg:mt-5">
//           <h1 className="text-white mt-3 lg:mr-[1420px] lg:mt-5 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold font-ondo-bold leading-tight md:leading-[34.03px] tracking-wider">
//             board
//           </h1>
//         </div>
//       </div>

//       <div className="flex flex-1 justify-between items-center mr-[100px] md:mr-[800px]">
//         <ul className="list-none sm:flex hidden justify-end items-center -ml-[1400px]">
//           {navLinks.map((item) => (
//             <li
//               key={item.label}
//               className="font-extrabold cursor-pointer text-white uppercase"
//             >
//               {item.label}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="flex justify-end mt-1 lg:mr-2 md:-mt-10">
//         <img
//           src={IconBag}
//           alt="Icon Bag"
//           className="sm:block hidden cursor-pointer"
//         />
//       </div>

//       <div className="mr-4 flex md:hidden justify-end mt-1">
//         <button
//           type="button"
//           onClick={handleMenu}
//           className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400"
//         >
//           <span className="sr-only">Open Main Menu</span>
//           {open === true ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {open ? (
//         <div className="md:hidden">
//           <div className="list-none px-3 pt-3 pb-3 space-y-1 md:mr-[200px]">
//             {navLinks.map((item) => (
//               <li key={item.label}>
//                 <a
//                   href={item.href}
//                   className="text-white leading-normal block px-3 py-2 text-base font-medium"
//                 >
//                   {item.label}
//                 </a>
//               </li>
//             ))}
//           </div>
//         </div>
//       ) : null}
//     </nav>
//   );
// };

// export default Nav;
