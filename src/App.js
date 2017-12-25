import React, { Component } from 'react';
import './App.css';
import Counters from './counters';
import { Provider } from 'react-redux';

import { createStore } from 'redux'
import reducer from './reducer/reducer'


const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// console.log(store.getState());
class App extends Component {
  
  render() {
    return (
      <div className="App">
     <Provider store={store} > 
       <Counters/>
       </Provider>
      </div>
    );
  }
}
export default App;
