import React from 'react';
import './App.css';
import Home from './components/Home';
import Account from './components/Account';
import Address from './components/Address';
import Buisness from './components/Buisness';
import {BrowserRouter , Route , Switch} from 'react-router-dom';
// import Form from './Form';
// import Form from './components/Form'; 
function App() {
  return (
    <div className='App'>
      
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/buisness">
            <Buisness/>
          </Route>
          <Route path='/next'>
            <Account/>
          </Route>
          <Route path='/address'>
            <Address/>
          </Route>
    </Switch>
    </BrowserRouter>
    {/* <Form/> */}
    </div>
  );
}

export default App;
