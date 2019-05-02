import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './Main';
import About from './About';
import PageNotFound from './404';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/about' component={About}/>
            <Route path="*" component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
