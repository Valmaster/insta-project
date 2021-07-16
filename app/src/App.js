import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Actuality from './components/flow/actuality/Actuality';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="content">
          <Actuality />
        </div>
      </div>
    )
  }
}

export default App;
