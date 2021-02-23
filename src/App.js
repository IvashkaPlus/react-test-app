import React, {Component} from 'react';
import './App.scss';
import Car from "./Car/Car";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cars: [
                { name: 'Ford', year: "2018" },
                { name: 'Audi', year: 2020 },
                { name: 'Mazda', year: 2014 }
            ],
            pageTitle: 'React components',
            showCars: false
        };
    }

    toggleCarsHandler = () =>{
        this.setState({
            showCars: !this.state.showCars
        })
    };

    changeNameHandler(name, index){
        const car = this.state.cars[index];
        car.name = name;
        const cars = [...this.state.cars];
        cars[index] = car;
        this.setState({cars});
    }

    deleteHandler(index){
        const cars = [...this.state.cars];
        cars.splice(index, 1);
        this.setState({cars});
    }


    render() {
        const divStyle = {
            textAlign: 'center'
        };

        let cars = null;

        if(this.state.showCars){
            cars = this.state.cars.map((car, index) => {
                return (
                    <ErrorBoundary key = {index}>
                        <Car
                            name={car.name}
                            year={car.year}
                            onDelete = {this.deleteHandler.bind(this, index)}
                            onChangeName = {event => this.changeNameHandler(event.target.value, index)}
                        />
                    </ErrorBoundary>

                )
            })
        }

        return(
            <div style={divStyle}>
                <h1>{this.state.pageTitle}</h1>

                <Counter />
                <hr />
                <button
                    onClick={this.toggleCarsHandler}
                    style={{marginTop: '20px'}}
                >
                    Toggle cars
                </button>

                { cars }
            </div>
        )
    }
}

export default App;
