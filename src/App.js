import React from 'react';
import './App.css';
import Home from './components/Home';
import Account from './components/Account';
import Address from './components/Address';
import Buisness from './components/Buisness';
import {BrowserRouter , Route , Switch,useLocation} from 'react-router-dom';
// import Form from './Form';
// import Form from './components/Form'; 

function Progress() {
  const location = useLocation();
  const totalPages = 3;
  let currentPage = 1;
  switch (location.pathname) {
    case '/buisness':
      currentPage = 1;
      break;
    case '/next':
      currentPage = 2;
      break;
      case '/address':
      currentPage = 3;
      break;
    default:
      currentPage = 1;
      break;
  }
  const progress = ((currentPage - 1) / (totalPages - 1)) * 100;

  return (
    <div style={{ width: '100%', height: '20px', backgroundColor: '#eee' }}>
      <div style={{ width: `${progress}%`, height: '100%', backgroundColor: 'blue' }}></div>
    </div>
  );
}




function App() {

  return (
    <div className='App'>
    
    <BrowserRouter>
    <Progress/>
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
