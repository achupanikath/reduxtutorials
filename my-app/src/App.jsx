import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Display from './components/Display';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
       <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {console.log("Test 1., store.getState()")}
        <Display />
      </div>
    </Provider>
    );
  }
}

export default App;
