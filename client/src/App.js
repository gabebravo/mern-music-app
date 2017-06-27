import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import containers
import SearchPage from './containers/SearchContainer'
import ArtistPage from './containers/ArtistContainer'
import CreatePage from './containers/CreateArtist'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={SearchPage} />
            <Route exact path='/artist' component={ArtistPage} />
            <Route exact path='/newArtist' component={CreatePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
