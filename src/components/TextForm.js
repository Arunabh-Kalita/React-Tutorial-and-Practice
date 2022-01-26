import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () =>{
        let newText = '';
        setText(newText);
    }

    const handleRemoveExtraSpace = () =>{
        let newText = text.replace(/\s+/g,' ').replace(/^\s+|\s+$/,'');
        setText(newText);
    }
    const handleCapitalize = () =>{
        let re = /(^|[.!?]\s+)([a-z])/g;
        let newText = text.replace(re, (m, $1, $2) => $1 + $2.toUpperCase());
        setText(newText);
    }
    
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>      
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleRemoveExtraSpace}>Remove Extra Space</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleCapitalize}>Capitalize</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
