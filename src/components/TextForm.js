import { useState } from 'react';

const TextForm = (prop) => {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here");
    return ( 
        <>
        <div className="container" style={{color:prop.mode==='light'? 'white' : '#042743'}}>
            <h1 style={{color:prop.mode==='light'? '#042743' : 'white'}}>{ prop.heading }</h1>
            <div className="mb-3">
            <textarea className="form-control" onChange={handleChange} value={text} style={{backgroundColor:prop.mode==='light'? 'white' : 'grey', color:prop.mode==='light'? '#042743' : 'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
        </div>
        <div className="container my-3">
            <h1 style={{color:prop.mode==='light'? '#042743' : 'white'}}>You text summary</h1>
            <p style={{color:prop.mode==='light'? '#042743' : 'white'}}>{text.split(" ").length} words and {text.length} charecters</p>
            <p style={{color:prop.mode==='light'? '#042743' : 'white'}}>{0.008 * text.split(" ").length} Minutes to read</p>
        </div>
        </>
     );
}
 
export default TextForm;