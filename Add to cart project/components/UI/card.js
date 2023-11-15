import React from 'react';
import './card.css';

function card (props){
    //ExpenseItem er vitor joto class ase segulo access korar jonno props.className bebohar kora hoy
    const classes = 'card ' + props.className;
    return(
        //card hosse amar created component, ExpenseItem e card use korsi tai sekhaner sob component ekhane chole asbe props.children method er maddhome....
         <div className={classes}>{props.children}</div>
    )
}
export default card