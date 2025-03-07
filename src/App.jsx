import React from "react";
import Champion from "./components/champion";
import About from "./components/about";
import NavBar from "./components/navbar";
import Features from "./components/features";
import Story from "./components/story";

const App = () => {
  return(
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Champion />
      <About />
      <Features />
      <Story />
    </main>
  )
}

export default App;