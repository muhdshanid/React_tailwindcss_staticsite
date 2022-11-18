import React from "react";
import Analytics from "./Components/Analytics";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Newsletter from "./Components/Newsletter";

function App() {
  return (
    <div>
    <div className="lg:px-16">
     <Navbar/>
     </div>
     <Hero/>
     <div className="bg-white">
     <Analytics/>
     </div>
     <div className="px-16">
     <Newsletter/>
     </div>
     <div className="bg-white">
     <Cards/>
     </div>
     <Footer/>
     </div>
  );
}

export default App;
