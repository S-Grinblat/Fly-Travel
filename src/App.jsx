import React from "react";
import { Home } from "./components/Home/Home";
import { Info } from "./components/Info/Info";
import { Navbar } from "./components/NavBar/Navbar";
import { Search } from "./components/Search/Search";
import { Support } from "./components/Support/Support";
import { Lounge } from "./components/Lounge/Lounge"
import { Travelers } from "./components/Travelers/Travelers";
import { Suscribe } from "./components/Suscribers/Suscribe";
import { Footer } from "./components/Footer/Footer";

const App = () => {
  return(
    <>
      <Navbar />
      <Home /> 
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Suscribe />
      <Footer />
    </>
  )
}

export {App}