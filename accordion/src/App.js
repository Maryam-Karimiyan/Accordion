import  Accordion  from "./components/Accordion";
import  Header from './components/accordionHeader';
import "./App.css";

//
function App() {

 // const [expand,setExpand]=useState(false);
  // const handleChange=()=>{
  //   setExpand(!expand);
  // }
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Accordion></Accordion>
      </div>
    </div>
  );
}

export default App;
