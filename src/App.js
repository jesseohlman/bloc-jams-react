import React, { Component } from 'react';
import logo from './logo.svg';
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
        <nav>
        <Link to='/'>Landing</Link>
        <Link to='/library'>Library</Link>
        </nav>
<h1>Bloc James</h1>
<main>
<Route exact path="/" component={Landing} />
<Route path="/library" component={Library} />
<Route path="/album" component={Album} />
<Route path="/album/:slug" component={Album}/>
</main>
      </header>
      </div>
    );
  }
}

export default App;
