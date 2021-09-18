import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {
  return (
    <Provider store={store}>
      Chess App
    </Provider>
  );
}

export default App;
