import React, { Component } from 'react';
import TodoList from './TodoList';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import { Provider } from 'react-redux';
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom';
import thunk from 'redux-thunk';

import './App.css';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='App'>
            <h1>This is my Todo List</h1>
            <p>
              <Link to='/todos'>See todos</Link>
            </p>
            <p>
              <Link to='/todos/new'>Add todo</Link>
            </p>
            <Route path='/todos' component={TodoList} />
            <Route exact path='/' render={() => <Redirect to='/todos' />} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
