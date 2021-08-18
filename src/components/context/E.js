import React from 'react';
import { useStateContext } from './FuncProvider';



const E = (props) => {
  const context = useStateContext();

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        minHeight: '100px',
        flexDirection: 'column',
        background: 'lime',
        color: 'white',
        fontSize: '1.2rem',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}>
      E
      <h2>Name: {context.state.name}</h2>
      {props.children}
    </div>
  )
}

export default E;

