import React from 'react';


const Button = (props) => {
  // REFs
  let buttonRef = React.createRef();

  // gives error cause it hasnt loaded yet so we have to put it in a function kinda like async await
  // console.log(buttonRef.current.clientWidth);

  let clickMe = () => {
    console.log(buttonRef.current.clientWidth)
  }

  return (
    < button
      onClick={clickMe}
      ref={buttonRef}
      id="button"
      style={{
        background: 'black',
        color: 'white',
        fontSize: '1.3rem',
        padding: '10px 20px'
      }
      }
    >
      {props.children}
    </button >
  )
}

export default Button;