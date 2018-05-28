import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-jss';
import { PersistGate } from 'redux-persist/integration/react';

// Styles
import 'normalize.css';
import 'purecss';
import 'purecss/build/grids-responsive-min.css';

// Config
import registerServiceWorker from './registerServiceWorker';
import { store, persistor, history } from './config/store';
import theme from './themes/theme';

// In Hourse Components
import Routes from './routes';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Routes history={history} />
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  target,
);
registerServiceWorker();
