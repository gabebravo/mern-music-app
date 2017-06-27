import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import containers
import SearchPage from './containers/SearchContainer'
import ArtistPage from './containers/ArtistContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={SearchPage} />
            <Route exact path='/artist' component={ArtistPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
