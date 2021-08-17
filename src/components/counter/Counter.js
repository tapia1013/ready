import React, { useState, useEffect } from 'react';
import Button from './Button';
import Number from './Number';


const Counter = (props) => {
  const [points, setPoints] = useState(0)
  const [goal, setGoal] = useState(11)

  //             lifecycle
  // Runs each time site is rendered
  useEffect(() => {
    console.log('Run Everytime');
    console.log('A');
  })

  // runs only once when initial render
  useEffect(() => {
    console.log('Run Once');
    console.log('B');
  }, [])

  // only trigger this when GOAL changes
  useEffect(() => {
    console.log('Run Once and when GOAL CHANGES');
    console.log('C');
  }, [goal])

  return (
    <div className="counter">
      <Number digit={points} />
      <div className="counter__buttons">
        <Button
          points={points}
          goal={goal}
          setGoal={setGoal}
          setPoints={setPoints}
          value="minus"
        >
          -
        </Button>
        <Button
          points={points}
          goal={goal}
          setGoal={setGoal}
          setPoints={setPoints}
          value="plus"
        >
          +
        </Button>
        Goal: {goal}
      </div>
    </div>
  )
}



export default Counter;