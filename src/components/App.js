import React, { Component,PropTypes } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Header">
          <a href="/">Home</a>
          |
          <a href="/Supplier">Supplier</a>
        </div>
        <div className="App-Body">
        {this.props.children}
        </div>

      </div>
    );
  }
}
App.propTyps = {
  children: PropTypes.object.isRequired
};
export default App;
