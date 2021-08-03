import React from 'react';
import ReactDOM from 'react-dom';


let name = 'Riah';
let lastName = 'Tapia';
let age = 69;
let isLoggedIn = false;
let width = 400;
let height = 300;


let styles = {
  box: {
    backgroundColor: 'dodgerBlue',
    color: 'white',
    textAlign: "center",
    width: `${width * 3 / 2}px`,
    height: `${height}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  h1: {
    backgroundColor: 'black',
    width: '100px',
    height: '80px',
    fontFamily: 'sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '.8rem'
  }
}


const App = () => {
  // let showAccount = () => {
  //   return (
  //     <h1>You are Logged In</h1>
  //   )
  // }

  const printAlert = (msg) => {
    alert(msg)
  }

  return (
    <>
      <Header background='black'>
        <div style={{}}>Logo</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </nav>
      </Header>

      <Header background='dodgerBlue'>
        <div style={{}}>Logo</div>
      </Header>
    </>
  )
}

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

ReactDOM.render(<App />, document.querySelector('#root'))


