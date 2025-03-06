import React from "react";
import Champion from "./components/champion";
import About from "./components/about";
import NavBar from "./components/navbar";
import Features from "./components/features";

const App = () => {
  return(
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Champion />
      <About />
      <Features />
    </main>
  )
}

export default App;