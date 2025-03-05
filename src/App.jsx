import React from "react";
import Champion from "./components/champion";
import About from "./components/about";
import NavBar from "./components/navbar";

const App = () => {
  return(
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Champion />
      <About />
    </main>
  )
}

export default App;