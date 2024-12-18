// Correct Version: Remove any other BrowserRouter or Router wrapping

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
