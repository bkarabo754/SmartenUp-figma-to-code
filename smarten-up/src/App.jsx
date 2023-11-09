import React from "react";
import Nav from "./components/Nav";

const App = () => {
  return (
    <section className="w-screen h-screen absolute bg-gradient-to-r from-purple-600 via-pink-400 to-purple-900">
      <Nav />
    </section>
  );
};

export default App;
