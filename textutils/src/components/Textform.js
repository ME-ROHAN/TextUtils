import React , { useState } from 'react'



export default function Textform(props) {
    
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    const appendAlert = (message, type) => {
      const wrapper = document.createElement('div')
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
      ].join('')
    
      alertPlaceholder.append(wrapper)
    }
    
    const alertTrigger = document.getElementById('liveAlertBtn')
    if (alertTrigger) {
      alertTrigger.addEventListener('click', () => {
        appendAlert('Nice, you triggered this alert message!', 'success')
      })
    }
    
    const[text, setText] = useState("enter your text here");

    // let context = text;
  

    const handleupclick = ()=>{
        // let newtext = text.toUpperCase; 
       let newtextt = text.toUpperCase();
        setText (newtextt);
        props.funn ("Text has been changed to UpperCase" , "success" )
    } 
    
    const handleonclick = (e)=>{
        setText ( e.target.value);

    }

    const handlelowclick = ()=>{
        // let newtext = text.toUpperCase; 
       let newtextt = text.toLowerCase();
        setText (newtextt);
       
       
        props.funn 
        
        


        ("Text has been changed to LowerCase" , "success" )
        
    } 

    const handleclear =()=>{
        let textt = "";
        setText(textt);
        props.funn("Text has been cleared" , "danger" )
    }
  return (
    <div className='container' >
        <div>
            <h1 className='m-4'>TYPE ANYTHING :</h1>
            <textarea className="form-control m-4" onChange={handleonclick} id="exampleFormControlTextarea1" value={text} cols="100" rows="10" style={props.colorr}></textarea>
        </div>
            <h3 className='m-4'>
            Convert to: 
            </h3>
        
            <button type="button"  className='btn btn-dark m-3' onClick={handleupclick} style={props.sarkmode }> Capitalize</button>
            <button type="button" className='btn btn-dark m-3' onClick={handlelowclick} style={ props.sarkmode }> LowerCase</button>
            <button type="button" class="btn btn-success" onClick={handleclear}>Clear</button>
    
            {/* <button type="button" className='btn btn-dark m-3' onClick={handlelowclick} style={{backgroundColor : props.sarkmode.backgroundColor === "black" ? "blue" : "black"  }}> LowerCase</button> */}
            {/* <button type="button" class="btn btn-dark">Dark</button> */}
        <div>
            <h1 className='m-4'>your word and letter counts</h1>
            <p className='m-4'>letter counts: {text.length} letters and word count : {text.trim().split(/\s+/).filter(Boolean).length} </p>
        </div>

        <div>
            <h2  className='m-4'> Preview</h2>
            <p className='m-4'>{text.length>0? text: "Enter or Type something to preview"}</p>
        </div>
        
    </div>
  )


  
}



