import React from 'react';
import Header from './Header';
import Logo from './Logo';
import Counter from './counter/Counter';
import Form from './form/Form';
// class provider
// import { GlobalStateProvider, StateContext } from './context/ClassProvider';
// hook function provider
import { GlobalStateProvider, StateContext } from './context/FuncProvider';
import A from './context/A';
import B from './context/B';
import C from './context/C';
import D from './context/D';
import E from './context/E';


let data = [
  {
    fullName: 'Cookie Tapia',
    status: 'dog',
    description: 'Cookie smells just like her owner HAHA LMFAO!',
    totalFriends: 100,
    joinedYear: 2015,
    // imageUrl: 'https://images.pexels.com/photos/2476343/pexels-photo-2476343.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    imageUrl: 'https://www.dogbreedslist.info/uploads/dog-pictures/maltese-1.jpg'
  },
  {
    fullName: 'Nye Rod',
    status: 'dog',
    description: 'Nye is a minature hippo that eats everything and issa KeWl!',
    totalFriends: 80,
    joinedYear: 2014,
    imageUrl: 'https://www.pixelstalk.net/wp-content/uploads/2016/04/Pitbull-dogs-wallpapers-.jpg'
  },
  {
    fullName: 'Riah Tapia',
    status: 'Thot',
    description: 'Smells just like her dog Cookie and has gap teeth LmFaO!',
    totalFriends: 69,
    joinedYear: 2008,
    imageUrl: 'https://assets2.rappler.com/CDAAB22C51BF47FCA6BEB82ACA5B5F4C/img/F882B9066C7F48719F23390208C02FB6/finding-dory-baby-001.jpg'
  }
]



// IMPORT STATECONTEXT.CONSUMER ONLY FOR THIS COMPONENT YOU DONT NEED IT FOR THE OTHERS ONLY 1 MAIN ONE.


const App = (props) => {


  return (
    <GlobalStateProvider>
      <StateContext.Consumer>
        {
          context => {
            console.log(context);
            return (
              <>
                <Header background='black'>
                  <Logo>Riah</Logo>
                  <nav>
                    <a href="/">Home</a>
                    <a href="/">About Us</a>
                    <a href="/">Contact</a>
                  </nav>
                </Header>

                <main style={{
                  margin: '20px auto',
                  width: '100%',
                  maxWidth: '960px',
                  padding: '20px 20px'
                }}>
                  <input
                    type="text"
                    value={context.state.name}
                    onChange={context.handleChange}
                  />
                  {/* <Counter /> */}
                  {/* <Form /> */}
                  <h1>Name: {context.state.name}</h1>
                  <A>
                    <B>
                      <C>
                        <D>
                          <E></E>
                        </D>
                      </C>
                    </B>
                  </A>
                </main>
              </>
            )
          }
        }
      </StateContext.Consumer>
    </GlobalStateProvider>
  )
}

export default App;






