import React, {useState} from 'react'
export default function Textform(props) {
    const upclick =()=>{
        // console.log("Ucase clicked"+ text);
        let newtext =text.toUpperCase();
        setText(newtext);
    }
    const clear =()=>{
        // console.log("Ucase clicked"+ text);
        let newtext ='';
        setText(newtext);
    }
    const handleOnchange =(event)=>{
        // console.log("On change");
        setText(event.target.value)
        
    }
    const [text, setText]= useState('');
    // text="new text";// wrong way to change text i.e enter text here
    // setText("new text"); // correct way to change the text
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control"value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={upclick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1' onClick={clear}>Clear</button>
        </div>
        <div className='container my-3'style={{color:props.mode==='dark'?'white':'black'}}>
            <p>{text.split (" ").length} words and {text.length} characters</p>
           
        </div>
        </>
    )
}
