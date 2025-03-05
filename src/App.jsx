import React from "react";
import Champion from "./components/champion";
import About from "./components/about";

const App = () => {
  return(
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Champion />
      <About />
    </main>
  )
}

export default App;