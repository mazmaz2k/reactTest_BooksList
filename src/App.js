import React, { Component } from 'react';
import './App.css';
import BookList from './components/BookList';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <div>
          <BookList />
        </div>
      </div>
    );
  }
}

export default App;
