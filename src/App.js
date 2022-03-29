
import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = ()=> {
  const pageSize = 6;

  
  const [Progress, setProgress] = useState(0);

  

  


    return (
      <div>
       <Router>
       <Navbar />
       <LoadingBar
        color='#f11946'
        progress={Progress}
        height={3}
      
      />
       
       <Switch>
          <Route exact path="/news-app/"><News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" /></Route>
          <Route exact path="/news-app/business"><News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business" /></Route>
          <Route exact path="/news-app/entertainment"><News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment" /></Route>
          <Route exact path="/news-app/general"><News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" /></Route>
          <Route exact path="/news-app/health"><News setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health" /></Route>
          <Route exact path="/news-app/science"><News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science" /></Route>
          <Route exact path="/news-app/sports"><News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports" /></Route>
          <Route exact path="/news-app/technology"><News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology" /></Route>
          
         
        </Switch>
       </Router>
      </div>
    )
  
}

export default App



