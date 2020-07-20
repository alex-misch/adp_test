import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import { NavLine } from './components/Nav';
import { HomePage } from './routes/HomePage';
import { HistoryPage } from './routes/HistoryPage';
import store from './store/store'

interface AppProps {
  basename: string,
}

const App: React.FC<AppProps> = props => {
  return (
    <Provider store={store}>
      <BrowserRouter basename={props.basename}>
        <NavLine />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/history" component={HistoryPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
