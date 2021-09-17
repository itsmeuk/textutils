import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to Uppercase!", "success");
    }
    
    const handleLoClick = ()=>{
        // console.log("lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to Lowercase!", "success");
    }
    
    const handleCopy = ()=>{
        // console.log("Copy button was clicked" + text);
        var text = document.getElementById("myTextBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clipboard!, use ctrl+v to paste the copied text.", "success");
    }
    
    const handleClearClick = ()=>{
        // console.log("Erase button was clicked" + text);
        let newText = '';
        props.showAlert("You cleared the textbox!", "warning");
        setText(newText);
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white', color: props.mode === 'dark'?'white':'#042743'}} id="myTextBox" rows="10"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>UPPERCASE</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>lowercase</button>
            <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Erase Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>You have entered {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters (including space).</p>
            <p>You need average time of {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read this enough.</p>
            <br />
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the box above to preview that here!"}</p>
        </div>
        </>
    )
}
