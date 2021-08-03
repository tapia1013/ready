import React from 'react';
import Header from './Header';
import Logo from './Logo';
import Card from './Card';

const App = () => {


  return (
    <>
      <Header background='black'>
        <Logo>Vees</Logo>
        <nav>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </nav>
      </Header>

      <main style={{
        margin: '20px auto',
        width: '100%',
        maxWidth: '960px'
      }}>
        <div className="ui link cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
      );
    </>
  )
}

export default App;