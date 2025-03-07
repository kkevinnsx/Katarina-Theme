import React from "react";
import Champion from "./components/champion";
import About from "./components/about";
import NavBar from "./components/navbar";
import Features from "./components/features";
import Story from "./components/story";
import Contact from "./components/contact";

const App = () => {
  return(
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Champion />
      <About />
      <Features />
      <Story />
      <Contact />
    </main>
  )
}

export default App;