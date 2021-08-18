// HOW TO CONSUME WITH A FUNCTIONAL COMPONENT THE A,B,C ARE HOW TO CONSUME WITH CLASS COMPONENTS
import React from 'react';
// this is the react hook we created in funcProvider to be able to consume with FUNCTIONAL COMPONENTS
import { useStateContext } from './FuncProvider';




const D = (props) => {
  const context = useStateContext();

  // we dont need .Consumer with function based comp
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        minHeight: '100px',
        flexDirection: 'column',
        background: 'pink',
        color: 'white',
        fontSize: '1.2rem',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}
    >
      D
      <h2>Name: {context.state.name}</h2>
      {props.children}
    </div>
  )
}




export default D;

