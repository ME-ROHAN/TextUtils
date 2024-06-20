import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';



import {
  Route,
  BrowserRouter,
  Routes,
  Link
} from "react-router-dom";

function App() {

  const[aalert, setalert] = useState (null)
 const[lark, setlark] =useState({
  color: "white",
  backgroundColor: "black"
 })



  

 

 



  const fun = (message, type)=>{
    setalert({
      msg : message,
      type : type
  
  
    })

    setTimeout(() => {
      setalert(null)
    }, 1500);



  }
  
  const [darkmode,setdarkmode] = useState ({
    color: "black",
    backgroundColor: "white"
  })

  const mode =()=>{
    if(darkmode.backgroundColor === "white"){
    setdarkmode ( {color: "white",
    backgroundColor: "black"
    
  }
  )
  fun("dark mode has been enabled", "secondary")
  document.body.style.backgroundColor = "black"
  document.body.style.color = "white"
  
  setlark({
    color: "black"
    , backgroundColor: "white"
  })
}
  else{
    setdarkmode ( {color: "black",
    backgroundColor: "white"})
    fun("light mode has been enabled" , "dark")
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
  }
  setlark({
    color: "white"
    , backgroundColor: "black"
  })
}

const greenimode =()=>{
  if(darkmode.backgroundColor === "black" || darkmode.backgroundColor === "white" || darkmode.backgroundColor === "blue"){
  setdarkmode ( {color: "white",
  backgroundColor: "green"
}
)
fun("blue mode has been enabled", "secondary")
document.body.style.backgroundColor = "green"
document.body.style.color = "white"

setlark({
  color: "black"
  , backgroundColor: "red"
})
}
else{
  setdarkmode ( {color: "black",
  backgroundColor: "white"})
  fun("green mode has been disabled" , "dark")
  document.body.style.backgroundColor = "white"
  document.body.style.color = "black"
  setlark({
    color: "white"
    , backgroundColor: "black"
  })
}
}




const biliumode =()=>{
  if(darkmode.backgroundColor === "black" || darkmode.backgroundColor === "white" || darkmode.backgroundColor === "green"){
  setdarkmode ( {color: "white",
  backgroundColor: "blue"
}
)
fun("blue mode has been enabled", "secondary")
document.body.style.backgroundColor = "blue"
document.body.style.color = "white"
setlark({
  color: "black"
  , backgroundColor: "purple"
})
}
else{
  setdarkmode ( {color: "black",
  backgroundColor: "white"})
  fun("blue mode has been disabled" , "dark")
  document.body.style.backgroundColor = "white"
  document.body.style.color = "black"
  setlark({
    color: "white"
    , backgroundColor: "black"
  })
}

// const lark = ()=>{
//   "white"
// }

}
  
  return (
    <>
   
   <Navbar contact ="asd" name="rohan" mode = {mode} darkmode = {darkmode} bluemode={biliumode} greenmode= {greenimode}/>
    <Alert aalert= {aalert} /> 
    <BrowserRouter>
    
    </BrowserRouter>
    <BrowserRouter>
    <Routes>
    
    {/* <Link to={"/my"} >Myself</Link> */}
    {/* <Route path='/' element={<Navbar contact ="asd" name="rohan" mode = {mode} darkmode = {darkmode} bluemode={biliumode} greenmode= {greenimode}/>}></Route> */}
    <Route  path='/' element={<Textform funn={fun} colorr={darkmode} sarkmode={lark} />}></Route>
    <Route  path='/About' element={<About />}/>
    <Route  path='/my' element={<About />}/>
    {/* <Route  path='*' element={<nopage/>}/> */}
    </Routes>
    </BrowserRouter>
       
    </>
  );
}




export default App;
