import  Accordion  from "./components/Accordion";
import  Header from './components/accordionHeader';
// import {ThemeProvider} from 'styled-components';
import LastOne from "./components/LastOne";
import { useState } from "react";
import "./App.css";


//
function App() {

  return (
    <div className="App">
      <Header bg="#fff" textcolor="#9747FF" />
      {/* <Accordion></Accordion> */}
      <LastOne  detailbg="#9747FF" summarybg="#FFCD29" palign='left'/>
    </div>
  );
}

export default App;
