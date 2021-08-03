import React from 'react';



export default function (props) {
  return (
    <header style={{
      background: props.background,
      color: 'white',
      padding: '15px 20px',
    }}>
      {props.children}
    </header>
  )
}






