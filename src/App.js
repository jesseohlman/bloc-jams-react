import React, { Component } from 'react';
import logo from './logo.svg';
import {Route, Link} from 'react-router-dom';
import Library from './components/Library';
import Landing from './components/Landing';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <nav>
        <Link to='/'>Landing</Link>
        <Link to='/Library'>Library</Link>
        </nav>
<h1>Bloc James</h1>
<main>
<Route exact path="/" component={Landing} />
<Route path="/library" component={library} />
<Route path="/album" component={Album} />
</main>
      </header>
      </div>
    );
  }
}

export default App;
