import React from 'react'
import classes from './User.module.css'

const User = (props)=> {
    return(
          <li className={classes.li}>
            <h2>{props.name}</h2>
            <h2>{props.email}</h2>
          </li>
    )
}
export default User