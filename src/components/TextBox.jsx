import React from 'react'

import { useState } from 'react'
export default function TextBox(props) {
    const [text,setText] = useState("");

    function onChange(event){
        setText(event.target.value);
    };
    
    function clicked(){
        const data = text.toUpperCase();
        setText(data);
        if(!text){
            props.showAlert("Please Enter Text!!!", "danger");
        }
}
    function clickedLower(){
        const data = text.toLowerCase()
        setText(data);
        if(!text){
            props.showAlert("Please Enter Text!!!", "danger");
        }
    }

    var update = '';
    function updated(){
        update = setText(text);
        if(!text){
            props.showAlert("Please Enter Text!!!", "danger");

        }
    }
    function clickedReverse(){
        let arr = text.split(" ");
        var  reverse = arr.reverse().join(' ');
        setText(reverse);
        if(!text){
            props.showAlert("Please Enter Text!!!", "danger");

        }
    }
    function clickedClear(){
        let data = '';
        setText(data);
        props.showAlert("Successfully Cleared!!!", "success");
    }
    
        let style ={
            backgroundColor: "white",
            color : 'black'
        }

        if(props.mode ==='light'){
            style ={backgroundColor:"white",
            color:'black'
        }
        }else{
            style ={backgroundColor:"#153b3c",
            color: "white"
        }
        }
    

  return (
    <div className="mx-5">
    <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1"  className={`form-label`} ><b>Enter Your Text Here</b></label>
        <textarea className="form-control" value={text} onChange={onChange} style= {style} id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
        <button type="button" onClick={clicked} className="btn btn-primary mx-2 my-2">To-Upper</button>
        <button type="button" onClick={clickedLower} className="btn btn-primary mx-2 my-2">To-Lower</button>
        <button type="button" onClick={clickedReverse} className="btn btn-primary mx-2 my-2"> Reverse </button>
        <button type="button" onClick={clickedClear} className="btn btn-primary mx-2 my-2"> Clear </button>
    
    <div className={`mt-3`} style={{textAlign:'left', fontSize:'30px',paddingBottom:'64px'}}>
        <h4>Your Text Snippet</h4>
        <p>Total words <b>{text.split(" ").length -1}</b> and & Characters <b>{text.length}</b></p>
        <h6>{(text.split(" ").length / 250).toFixed(2)} Minutes to read</h6>
        <h3>Summary</h3>
        <p>  {text}</p>
        <br /><br />
    </div>

    </div>
  )
}
