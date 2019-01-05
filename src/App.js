import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import Library from './components/Library';
import Landing from './components/Landing';
import Album from './components/Album';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <nav className="navbar">
        <Link to='/' className="navbar-item has-text-primary">Landing</Link>
        <Link to='/library' className="navbar-item has-text-primary">Library</Link>
        </nav>
<h1 className="title is-1 has-text-success">Bloc Jams</h1>
<main>
<Route exact path="/" component={Landing} />
<Route path="/library" component={Library} />
<Route path="/album/:slug" component={Album}/>
</main>
      </header>
      </div>
    );
  }
}

export default App;
