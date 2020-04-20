import React from 'react';
import logo from './logo.svg';
import './App.css';

import MoviesPage from './components/pages/MoviesPage';
import { Link,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <header>
        <p className="App-intro">
          <Link to="movies">Movies</Link>
        </p>
        </header>
      </header>
      <Route path='/movies' component={MoviesPage}></Route>
    </div>
  );
}

export default App;
