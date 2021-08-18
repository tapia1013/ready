import React, { useContext, useState } from 'react';

// intialize StateContext to have context
export const StateContext = React.createContext();

// its a hook we create ourselves so we can use the StateContext
export function useStateContext() {
  return useContext(StateContext);
}

export function GlobalStateProvider({ children }) {
  const handleChange = (e) => {
    setNewState({
      ...newState,
      state: {
        name: e.target.value,
      }
    }
    )
  }

  const [newState, setNewState] = useState({
    state: {
      name: 'Riah',
      dog: 'Cookie',
      breed: 'Smelly'
    },
    handleChange: handleChange
  })


  return (
    <StateContext.Provider value={newState}>
      {children}
    </StateContext.Provider>
  )
}



















