import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';

import store from './store';
import Jokes from './components/Jokes';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div > 
          <Jokes />
        </div>
      </Provider>
    );
  }
}

export default App;
