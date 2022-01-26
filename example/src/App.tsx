import '@nailahq/tail-ui/dist/index.css';
import React from 'react';
import Home from './Home';
import { TailUiContext } from '@nailahq/tail-ui/dist';
const theme = {
  primaryColor: 'blue',
};
const App = () => {
  return (
    <TailUiContext.Provider value={theme}>
      <Home />
    </TailUiContext.Provider>
  );
};

export default App;
