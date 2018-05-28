// @flow
import React from 'react';
import injectSheet from 'react-jss';

// Global Styles
import globalStyles from './themes/global';

type Props = {
  children: Node,
}

function App({ children }: Props) {
  return (
    <div className="App">
      {
        children
      }
    </div>
  );
}

export default injectSheet(globalStyles)(App);
