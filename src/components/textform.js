import React, { useState } from 'react';

export default function TextForm() {
    const [text, setText] = useState("");

    const handleupclick = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleloclick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    return (
        <>
            <div className='container my-3'>
                <h1>Enter the text to analyze</h1>
                <div className="form-group">
                    <textarea className='form-control' id="box" rows="8" value={text} onChange={handleOnChange}></textarea>
                    <button className='btn btn-primary my-3 mx-2' onClick={handleupclick}>Convert to upppercase</button>
                    <button className='btn btn-primary my-3 mx-2' onClick={handleloclick}>Convert to Lowercase</button>
                </div>
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} and {text.length} characeters</p>
            </div>
        </>
    )
}
