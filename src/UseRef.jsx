import React, {useState, useEffect, useRef} from 'react'

export default function UseRef() {

    const inputRef = useRef(null);

    useEffect(() => {
        console.log("Component Rendered");
    }); 

    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
        console.log(ref.current);
    }

  return (
    <>
        <button onClick={handleClick}>
            Click
        </button>
        <input ref={inputRef}/>
    </>
  )
}
