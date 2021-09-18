import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from './app/store';
import { IAppState } from './app/store/reducers';

function App() {
  const { board } = useSelector((s: IAppState) => s.board);

  console.log(board)

  return (
    <Provider store={store}>
      Chess App
    </Provider>
  );
}

export default App;
