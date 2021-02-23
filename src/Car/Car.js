import React from 'react';
import classes from './Car.module.scss'
import withClass from "../hoc/withClass";
import PropTypes from 'prop-types'

class Car extends React.Component {

    constructor(props) {
        super(props);

        this.inputRef = React.createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }

    render() {
        const inputClasses = [classes.input];
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
                    ref={this.inputRef}
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

Car.propTypes = {
    name: PropTypes.string,
    year: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
};

export default withClass(Car, classes.Car)