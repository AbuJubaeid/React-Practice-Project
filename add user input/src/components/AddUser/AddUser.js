import React, { useState } from 'react';
import Button from '../UI/Button/Button.js';
import Card from '../UI/Card/Card.js';
import ErrorModal from '../UI/ErrorModal/ErrorModal.js';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        //trim will remove extra space
        if (enteredUsername.trim().length === 0 && enteredEmail.trim().length === 0){
          setError({
            title: 'Invalid Input',
            message:'Please enter a valid Username and Email'
          });
          return;
        }

        //egula sob wrong unicode

        // const re = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+.[A-Za-z0-9]+$/gm;

        //  console.log('enteredEmail.match(re)', re.test(enteredEmail));
        // const emailRegex =
        // new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Test the email against the pattern
         const isValidEmail = emailPattern.test(enteredEmail); 
        
         console.log("test", isValidEmail, "enteredEmail", enteredEmail)


        if (!isValidEmail){
          setError({
            title: 'Invalid Email',
            message:'Please Enter a valid Email'
          });
          return;
        }

        if(isValidEmail){
          props.onAddUser(enteredUsername, enteredEmail);
          setEnteredUsername('');
          setEnteredEmail('');
        }


        
    }

    const userNameChangeHandler = (event) => {
      setEnteredUsername(event.target.value);
    }
    const emailChangeHandler = (event) => {
      setEnteredEmail(event.target.value);
    }
    const errorHandler = () => {
      setError(null);
    }

  return (
    <div>
      {error && <ErrorModal title={error.title}  message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label forhtml="username">UserName</label>
        <input 
        id="username" 
        type="text" 
        onChange={userNameChangeHandler}
        value={enteredUsername}/>
        <label forhtml="email">Email</label>
        <input 
        id="email" 
        type="text" 
        onChange={emailChangeHandler}
        value={enteredEmail}/>
        {/* <label forhtml="password">Password</label>
        <input 
        type="text" 
        id="password"
        ></input> */}
        <Button type="submit">Add User</Button>
    </form>
    </Card>
    </div>
  )
}

export default AddUser