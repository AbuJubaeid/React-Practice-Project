import React from 'react';
import Card from '../UI/Card/Card.js';
import classes from './UserList.module.css';

const UserList = (props) => {
    return(
        <Card className={classes.users}>
        <ul>
           {props.users.map((user) => (
            <li key={user.id}>
            {user.name} 
            {user.email} 
            </li>
           ))}
        </ul>
        </Card>
    )

}
export default UserList