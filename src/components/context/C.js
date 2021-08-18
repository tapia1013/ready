import React, { Component } from 'react';
import { StateContext } from './ClassProvider';



class C extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
          minHeight: '100px',
          flexDirection: 'column',
          background: 'red',
          color: 'white',
          fontSize: '1.2rem',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px'
        }}
      >
        C
        <StateContext.Consumer>
          {(context) => {
            return (
              <>
                <h4>Breed: {context.state.breed}</h4>
              </>
            )
          }
          }
        </StateContext.Consumer>
        {this.props.children}
      </div>
    )
  }

}



export default C;



