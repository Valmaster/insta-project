import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Suggestion from './components/flow/suggestion/Suggestion';
import Actuality from './components/flow/actuality/Actuality';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="content">
          <Actuality />
          <Suggestion />
        </div>
      </div>
    )
  }
}

export default App;
