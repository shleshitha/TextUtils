import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUPClick=()=>{
        // console.log("button clicked");
        setText(text.toUpperCase());
        props.showAlert("converted to UpperCase","success");
    }
    const handleLOClick=()=>{
        // console.log("button clicked");
        setText(text.toLowerCase());
        props.showAlert("converted to LowerCase","success");
    }
    const handleOnChange=(event)=>{
        // console.log("on chnage");
        setText(event.target.value);
    }
    const clear=()=>{
        setText("");
        props.showAlert("TextBox is cleared","success");
    }
    

    // const stop=()=>{
    //     speechSynthesis.cancel()
    //     setvisible(true);
    // }
    const speak =()=> {
    // Create a SpeechSynthesisUtterance
        // setvisible(false);
        const utterance = new SpeechSynthesisUtterance(text);

        // Select a voice
        const voices = speechSynthesis.getVoices();
        utterance.voice = voices[1]; // Choose a specific voice
        
        // Speak the text
        speechSynthesis.speak(utterance);
        props.showAlert("speech","success");
        
    }
    const colours=()=>{
        if(props.mode==="dark")
          return ("white");
        else
        return ("black");
    }
    const words=()=>{
        let cnt=text.split(" ").length;
        text.split(" ").forEach((word)=>{
            if(!word.length)
                cnt-=1;
        })
        return cnt;
    }
    const [text,setText]=useState('');
    // const [isvisible,setvisible]=useState(true);
    return (
        <div style={{color: colours()}}>
        <div className='container' >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea style={{color: "black",border:"1px solid black"}} className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="12"></textarea>
            </div>
            <div>
                <button className={`btn btn-${props.mode} mx-1`} onClick={handleUPClick}>Convert to Upper Case</button>
                <button className={`btn btn-${props.mode} mx-1`} onClick={handleLOClick}>Convert to Lower Case</button>
                <button className={`btn btn-${props.mode} mx-1`} onClick={clear}>Clear</button>
                <button className={`btn btn-${props.mode} mx-1`} onClick={speak}>Speak</button>
                {/* <button className='btn btn-primary mx-1' hidden={isvisible} onClick={stop}>Stop</button> */}
            </div>
            
        </div>
        <div className='container my-3'>
            <h2>Your Text Summary</h2>
            <p><b>{words()} words and {text.length} letters</b></p>
            <p>you can read this text in {0.008*(text.split(" ").length)} minutes </p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text :"Enter something in the textBox to preview here..."}</p>
        </div>
        </div>
    )
}
