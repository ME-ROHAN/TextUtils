import React from 'react';


export default function About() {

  // const[mode, setmode] = useState(
  //   {color : "black" ,
  //   backgroundColor : "white"});

  

  // const darkk = ()=>{
  //   if(mode.color === "black") { 
  //     setmode({
  //     color:"white",
  //     backgroundColor: "black"
  //   })}
  //   else {
  //     setmode({
  //     color:"black",
  //     backgroundColor: "white"
  //     }) };
  //   };
  
  

  return (
    
     <div  >
      <h1 >       Text Utils</h1>
      <div className="form-check form-switch" >
      {/* <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" /> */}
      {/* <label htmlFor="">Dark Mode</label> */}
      </div>

      <p  >       TextUtils is a versatile web application designed to enhance text manipulation and readability. It features a user-friendly interface where users can input paragraphs or text. The app offers several powerful functionalities: users can capitalize or convert text to lowercase for formatting purposes. It also includes tools to count characters and words, aiding in content analysis and adherence to limits. A preview mode allows users to see how text changes will appear before finalizing them. Additionally, TextUtils offers a dark mode option for improved visibility in low-light environments. Whether for writers, editors, students, or professionals, TextUtils provides essential tools for efficient text editing and analysis, combining practical utility with intuitive design for a seamless user experience.</p>
   
        </div>
  );
  };
