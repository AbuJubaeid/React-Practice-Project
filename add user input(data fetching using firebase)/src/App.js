import React, { Fragment, useState } from 'react';
import classes from './App.module.css';
import AddUser from './components/AddUser/AddUser.js';
import UserList from './components/AddUser/UserList.js';


function App() {
    const [user, setUser] = useState([])
    
    async function fetchUserHandler(){
      const response = await fetch('https://add-userinput-default-rtdb.firebaseio.com/userList.json')
      const data = await response.json()
      console.log(data)
      const loadedUser = [];
    for (const key in data){
      loadedUser.push({
        id:key,
        name:data[key][0],
        email:data[key][1],
    })
    console.log(data[key])
    }
    setUser(loadedUser)
    }

    async function addUserHandler (user){
      const response = await fetch('https://add-userinput-default-rtdb.firebaseio.com/userList.json', {
        method: 'POST',
        body: JSON.stringify(user),
        header:{
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      console.log(data)
    }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <section>
      <button className={classes.button} onClick={fetchUserHandler}>Get User List</button>
      </section>
      <section>
      <UserList users={user}/>
      </section>
    </Fragment>
  );
}

export default App;
