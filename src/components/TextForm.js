
import React,{useState} from 'react'

export default function TextForm(props) {
const handleupclick=()=>
{
    //console.log("upper case is clicked")
    let newtext=text.toUpperCase();
    settext(newtext)
    props.showalert('Converted to UpperCase',"success")
}
const handledownclick=()=>
{
    let newtext=text.toLowerCase()
    settext(newtext);
    props.showalert('Converted to LowerCase',"success")
}
const handleclear=()=>
{
    settext("");
    props.showalert('Cleared',"success")
}
const handleonchange=(event)=>
{
    settext(event.target.value)
}


    const [text,settext]=useState("Enter the text");
  return (
    <>
<div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className='mb-3'>
 
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}  rows="8"></textarea>
  </div> 
  <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleupclick} >Convert to uppercase</button>
  <button type="button" className="btn btn-primary my-3 mx-2" onClick={handledownclick} >Convert to lowercase</button>
  <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleclear} >clear</button>
</div>
<div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
  <h3> Your text Summary</h3>
  <p>{text.split(" ").length} words and {text.length}  characters
  </p>
  <p>{0.008 * text.split(" ").length} Minutes read</p>
  <h3>Preview</h3>
  <p>{text.length>0?text:'Enter the text in box to preview it here'}</p>
  </div>

</>
  )
}
