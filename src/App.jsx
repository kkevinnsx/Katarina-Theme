import React from "react";
import Champion from "./components/champion";

const App = () => {
  return(
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Champion />
      
      <section className="z-0 min-h-screen bg-blue-500"/>
    </main>
  )
}

export default App;