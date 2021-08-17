import React from 'react'


const Button = (props) => {

  const clickedBtn = () => {
    if (props.points == props.goal) {
      props.setGoal(props.points * 2)
    }
    if (props.value == 'plus') {
      props.setPoints(props.points + 1)
    } else {
      props.setPoints(props.points - 1)
    }

    console.log(props.points);
    console.log('CLicked BTN');
  }


  // using events
  const mouseEnters = (e) => {
    console.log('Mouse went ontop of button');
    console.log(e);
  }
  const mouseLeft = (e) => {
    console.log('Mouse left!!!');
    console.log(e);
  }


  return (
    <button
      onClick={clickedBtn}
      onMouseEnter={mouseEnters}
      onMouseLeave={mouseLeft}
      className="counter__minus"
    >
      {props.children}
    </button>

  )
}


export default Button;