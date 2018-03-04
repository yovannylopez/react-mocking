import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppRoutes from './AppRoutes';

import './assets/index.css';

import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <MuiThemeProvider>
    <AppRoutes />
  </MuiThemeProvider>
)

render(
  <App />, document.getElementById('root')
)
registerServiceWorker();
