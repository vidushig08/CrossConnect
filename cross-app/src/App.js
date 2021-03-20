import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Landing from './pages/landing/landing';
import LogIn from './pages/login/login';
import Worker from './pages/worker/worker'
function App() {
  return (
    <div>
      <React.Fragment>
      <div className="App">
         {/* <Switch> */}
           <Route exact path='/' component={Landing} />
           <Route exact path='/ngo' component={LogIn} />
           <Route exact path='/worker' component={Worker} />
         {/* </Switch> */}
       </div>
     </React.Fragment>
      <Landing/>
    </div>
    // <h1>heyy</h1>
    
  );
}

export default App;
