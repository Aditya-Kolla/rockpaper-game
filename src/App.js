import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import Game from './containers/Game/Game';
import './App.css';

class App extends Component {
  render() {
    return (
     <Layout>
       <Game />
     </Layout>
    );
  }
}

export default App;
