import React, { useState } from 'react';
import './App.css';
import AddUser from './components/AddUser/AddUser.js';
import UserList from './components/AddUser/UserList.js';

function App() {
    const [userList, setUserList] = useState([]);

    const addUserHandler = (uName, uEmail) => {
      setUserList((prevUsersList) => {
        return [...prevUsersList, {name:uName, email:uEmail, id:Math.random().toString()}]
      })
    }

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
