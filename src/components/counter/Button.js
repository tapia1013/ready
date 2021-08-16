import React from 'react'


const Button = (props) => {

  const clickedBtn = () => {
    if (props.value == 'plus') {
      props.setPoints(props.points + 1)
    } else {
      props.setPoints(props.points - 1)
    }

  }


  return (
    <button
      onClick={clickedBtn}
      className="counter__minus"
    >
      {props.children}
    </button>

  )
}


export default Button;