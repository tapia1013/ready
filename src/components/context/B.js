import React, { Component } from 'react'
// import { StateContext } from './ClassProvider';
import { StateContext } from './FuncProvider';


// IMPORT STATECONTEXT.CONSUMER IS ONLY FOR CLASS COMPONENTS


class B extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{
        display: 'flex',
        width: '100%',
        minHeight: '100px',
        flexDirection: 'column',
        background: 'dodgerBlue',
        color: 'white',
        fontSize: '1.2rem',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}>
        A
        <StateContext.Consumer>
          {context => {
            return (<h2>Dog: {context.state.dog}</h2>)
          }}
        </StateContext.Consumer>
        {this.props.children}
      </div>
    )
  }

}

export default B;