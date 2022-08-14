import React from 'react';

import Routing from './Routing';
import BuildMocks from './Data/Mocks/BuildMocks.js'

function App() {
  const MockData = BuildMocks();

  return (
    <Routing Data={MockData} />
  );
}

export default App;
