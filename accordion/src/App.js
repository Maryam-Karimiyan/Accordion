import  Header from './components/accordionHeader';
// import {ThemeProvider} from 'styled-components';
// import LastOne from "./components/LastOne";
import Form from "./components/Form";
import { SInput, SButton} from './components/Form';
import VerticalLine from './components/VerticalLine';
import "./App.css";
const theme = {
  bgform: "#fff",
  borderform: "#D2D2D2",
  borderRadiosform: "5px",
  paddingform: "30px",
  mdspaing: "20px",
  smspacing: "5px",
  borderinput: "#9747FF",
  bgbutton: "#FFCD29",
  colorbtn:'#333',
};
const action={
  get:'get',
  post:'post'
}
//
function App() {

  return (
    
    <div className="App">
      <Header bg="#fff" textcolor="#9747FF" />
      {/* <LastOne  detailbg="#9747FF" summarybg="#FFCD29" palign='left'/> */}
      <Form btnText='Sign In' action={action} theme={theme}  >
      <SInput theme={theme}/>
      <SInput theme={theme}/>
      <SInput theme={theme}/>
      <SInput theme={theme}/>
      <SButton theme={theme}>Sign In</SButton>
      </Form>


      <div>
        <VerticalLine/>
      </div>
    </div>
  );
}

export default App;
