import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import containers
import SearchPage from './containers/SearchContainer'
import ArtistPage from './containers/ArtistContainer'
import CreatePage from './containers/CreateArtist'
import UpdatePage from './containers/UpdateArtist'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={SearchPage} />
            <Route path='/artist' component={ArtistPage} />
            <Route path='/newArtist' component={CreatePage} />
            <Route path='/editArtist' component={UpdatePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
