import React from 'react';

import Header from './Components/Header';
import Routing from './Routing';
import BuildMocks from './Data/Mocks/BuildMocks.js'

function App() {
  const MockData = BuildMocks();

  return (
    <div>
      <Header />
      <Routing Data={MockData} />
    </div>
  );
}

export default App;
