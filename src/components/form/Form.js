import React, { useState } from 'react';




const Form = (props) => {
  const [fname, setFname] = useState('');
  const [showError, setShowError] = useState(false)



  const formSubmitted = (e) => {
    e.preventDefault();
    console.log('form submitted');
  }

  const handleChange = (e) => {
    // console.log(e);

    // we have to setName to something or else we wont see the change on the screen
    setFname(e.target.value);

    console.log(e.target.value);
  }


  // show error if less then 5 
  const checkString = () => {
    if (fname.length < 5) {
      setShowError(true)
    }
  }




  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
      onSubmit={formSubmitted}
    >
      <label htmlFor='fname'>Full Name</label>
      <input
        type="text"
        id="fname"
        name="fname"
        value={fname}
        onChange={handleChange}
        onFocus={() => setShowError(false)}
        onBlur={() => checkString()}
      />
      <div className={`error-message ${showError ? 'show' : ''}`}>
        Please put your full name
      </div>
      <button type="submit">Save</button>
    </form>
  )
}


export default Form;

// video 2 : setting up provider and cosumer