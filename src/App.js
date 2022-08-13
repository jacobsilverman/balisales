import React from 'react';

import Routing from './Routing';
import BuildMocks from './Data/Mocks/BuildMocks.js'

function App() {
  const MockData = BuildMocks();

  return (
    <div>
      <Routing Data={MockData} />
    </div>
  );
}

export default App;
