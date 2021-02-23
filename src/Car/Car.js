import React from 'react';
import classes from './Car.module.scss'
import withClass from "../hoc/withClass";

class Car extends React.Component {

    render() {
        const inputClasses = [classes.input];
        console.log(classes);
        if (this.props.name !== ''){
            inputClasses.push(classes.green);
            if (this.props.name.length > 4){
                inputClasses.push(classes.bold)
            }

        } else {
            inputClasses.push(classes.red)
        }

        return(
            <React.Fragment>
                <h2>Car name: {this.props.name}</h2>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input
                    className={inputClasses.join(' ')}
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment>
        )
    }
}


export default withClass(Car, classes.Car)