import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeContaineer from './Components/CakeContaineer';

function App() {
  return (
    <div className="App">
       <h2 style={{color:'red'}}>BAKERY SHOP</h2>
            <Provider store={store}>
            <div>
            <CakeContaineer/>
            </div>
            </Provider>
 
    </div> 
  );
}

export default App;
