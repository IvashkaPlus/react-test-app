import React from 'react';
import './Car.css'

class Car extends React.Component {

    render() {
        const inputClasses = ['input'];

        if (this.props.name !== ''){
            inputClasses.push('green');
            if (this.props.name.length > 4){
                inputClasses.push('bold')
            }

        } else {
            inputClasses.push('red')
        }

        return(
            <div className="Car">
                <h2>Car name: {this.props.name}</h2>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input
                    className={inputClasses.join(' ')}
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </div>

        )
    }
}


export default Car