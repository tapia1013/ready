import React from 'react';



const Header = (props) => {
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




export default Header;

