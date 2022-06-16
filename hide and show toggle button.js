import React from 'react'



const Demo2 = () => {
const clickNext = ()=>{
  var x = document.getElementById('firstbox1');
  var y = document.getElementById('secondbox2');
  if (x.style.display === "none") {
    x.style.display = "";
    y.style.display = 'none';
  } else {
    x.style.display = "none";
    y.style.display = "";
    
  }
}


  return (
    <>
      <div className="container">
        <div className="first" id='firstbox1'>
          <h1>Hello this is h1 tag</h1>
          <button type='button' onClick={clickNext}>next</button>
        </div>
        
        <div className="second" id='secondbox2' style={{display:'none'}}>
          <h1>this is second tag</h1>
          <button type='button' onClick={clickNext}>back</button>
        </div>
      </div>
    </>
  )
}

export default Demo2
