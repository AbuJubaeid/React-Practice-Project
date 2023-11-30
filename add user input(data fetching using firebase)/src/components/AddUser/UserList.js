import React from 'react';
// import Card from '../UI/Card/Card.js';
import User from './User.js';
import classes from './UserList.module.css';

const UserList = (props) => {
    return(
        <ul className={classes.users}>
           {props.users.map((user) => (
            <User 
            key={user.id}
            name={user.name} 
            email={user.email}/> 
           ))}
        </ul>
    )

}
export default UserList