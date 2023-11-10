/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        'primary': ['Lato'],
        'secondary': ['OndoBoldRegular']
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};


// import React from "react";

// const HeroSection = () => {
//   const word = "EXPLORE";

//   return (
//     <section className="flex flex-col md:flex-row">
//       <div className="w-full md:w-[578.09px] mt-10 md:mt-10 sm:ml-4 md:ml-20 ml-5">
//         <span className="text-white text-4xl md:text-4xl lg:text-5xl font-extrabold font-ondo-bold uppercase leading-tight md:leading-  [76.24px] tracking-tight md:tracking-[2.76px] mt-10 md:mt-10 sm:ml-4 md:ml-20 ml-0 lg:ml-[0px] lg:mt-[20px] lg:mr-20">
//           Let your <br /> mind{" "}
//           <div className="inline-block items-center">
//             {word.split("").map((letter, index) => (
//               <span
//                 key={index}
//                 className="bg-gradient-to-r text-4xl md:text-4xl lg:text-5xl font-ondo-bold uppercase leading-tight md:leading-[76.24px] tracking-tight md:tracking-[2.76px] from-purple-600 via-pink-500 to-purple-900 font-extrabold text-transparent bg-clip-text"
//               >
//                 {letter}
//               </span>
//             ))}
//           </div>
//         </span>
//         <span className="text-white text-4xl md:text-4xl lg:text-5xl font-extrabold font-ondo-bold uppercase leading-tight md:leading-[76.24px] tracking-tight md:tracking-[2.76px]">
//           {" "}
//           <br /> new world
//         </span>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// {
//   /* <span className="bg-gradient-to-r text-[68.94px] font-secondary uppercase leading-[76.24px] tracking-[2.76px] from-purple-600 via-pink-500 to-purple-900 font-extrabold text-transparent bg-clip-text"></span> */
// }


