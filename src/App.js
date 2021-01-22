import React from 'react';
import './app.scss';

import Layout from './components/layout'
import Routes from './routes'

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes />
      </Layout>
    </div>
  );
}

export default App;
