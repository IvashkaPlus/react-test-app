import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
      const divStyle = {
          textAlign: 'center',
          color: 'red'
      };


      return(
          <div style={divStyle}>
              <h1>Hello world!</h1>
          </div>
      )
  }
}

export default App;
