import React from "react";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
// import styles from "./styles";

const App = () => {
  return (
    <section>
      <div className="w-full bg-gradient-to-r from-indigo-900 via-indigo-600 to-blue-900">
        <Nav />
        <HeroSection />
      </div>

      <div className="from-indigo-900 via-indigo-600 to-blue-900">
        <div>{/* <HeroSection /> */}</div>
      </div>
      {/* <HeroSection /> */}
    </section>
  );
};

export default App;

// #6542F4, #F976FF, #B50098
// from-purple-600 via-pink-500 to-purple-900

// className="w-screen h-screen absolute bg-gradient-to-r from-indigo-900 via-indigo-600 to-blue-900 overflow-x-hidden"

// w-[100%] h-[100%] relatove z-[5] mix-blend-color-dodge border-none
