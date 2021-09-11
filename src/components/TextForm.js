import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = ()=>{
        // console.log("lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myTextBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>You have entered {text.split(" ").length} words and {text.length} characters (including space).</p>
            <p>You need average time of {0.008*text.split(" ").length} minutes to read this enough.</p>
            <br />
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
