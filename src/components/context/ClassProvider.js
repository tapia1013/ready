import React, { Component } from 'react'


// initializing our state... we can name this whatever
export const StateContext = React.createContext();


export class GlobalStateProvider extends Component {
  constructor(props) {
    super(props);
  }

  // this is the state that we pass around so that all of our compontents in other files have access to.
  state = {
    name: 'Vee',
    dog: 'Cookie',
    breed: 'Smelly'
  }

  // method
  handleChange = (e) => {
    this.setState({
      ...this.state,
      name: e.target.value
    })
  }

  render() {
    return (
      // create our provider thats automatically inside the  StateContext... give it a value that is state... we put this.props.children inbetweem the JSX so we can pass up the children from the file we use this at and pass it up to here where is inserted to global state
      <StateContext.Provider value={{
        state: this.state,
        handleChange: this.handleChange
      }}>
        {this.props.children}
      </StateContext.Provider>
    )
  }

}

