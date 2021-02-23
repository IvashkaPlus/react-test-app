import React from 'react';
import './Car.css'

export default (props) => {
    const inputClasses = ['input'];

    if (props.name !== ''){
        inputClasses.push('green');
        if (props.name.length > 4){
            inputClasses.push('bold')
        }

    } else {
        inputClasses.push('red')
    }




    return(
        <div className="Car">
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
}