import React from 'react';
import './App.css';
import Header from './Pages/Header'
import Home from './Pages/Home'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Redux/reducers/getterSetter'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// import { BaseContextProvider } from './ContextApi/BaseContext'

function App() {
  const store = createStore(rootReducer, applyMiddleware(thunk))
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Home />
        {/* <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router> */}
      </Provider>
    </div>
  );
}

export default App;
