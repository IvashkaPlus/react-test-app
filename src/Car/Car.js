import React from 'react';
import Radium from "radium";
import './Car.css'



const Car = props => {
    const inputClasses = ['input'];

    const style = {
        boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
        border: '1px solid #ccc',
        ':hover': {
            border: '1px solid #aaa',
            boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
            cursor: 'pointer'
        }
    };

    if (props.name !== ''){
        inputClasses.push('green');
        if (props.name.length > 4){
            inputClasses.push('bold')
        }

    } else {
        inputClasses.push('red')
    }




    return(
        <div className="Car" style={style}>
            <h2>Car name: {props.name}</h2>
            <p>Year: <strong>{props.year}</strong></p>
            <input
                className={inputClasses.join(' ')}
                type="text"
                onChange={props.onChangeName}
                value={props.name}
            />
            <button onClick={props.onDelete}>Delete</button>
        </div>

    )
};


export default Radium(Car)