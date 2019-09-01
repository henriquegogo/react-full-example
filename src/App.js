import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Categories from './pages/Categories';
import Trivia from './pages/Trivia';
import Report from './pages/Report';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <Router>
            <Route path='/' exact render={() => <Categories />} />
            <Route path='/trivia/:category' render={({ match }) => (
              <Trivia category={match.params.category} />
            )} />
            <Route path='/report' render={() => <Report />} />
          </Router>
        </main>
      </Fragment>
    );
  }
}

export default App;