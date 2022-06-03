## install redux-thunk

npm install redux-thunk
--> 
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

const store = createStore(rootReducer, applyMiddleware(thunk))


const INCREMENT_COUNTER = 'INCREMENT_COUNTER'

function increment() {
  return {
    type: INCREMENT_COUNTER
  }
}

function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(increment())
    }, 1000)
  }
}

action {
    1. plain object
    2. has a type
    3. whatever else you want

        {
        type: "USER_LOGGED_IN",
        username: "dave"
        }
}
action creators
reducers
middleware


Set up redux-thunk in your project

If you have a project that already has Redux set up, adding redux-thunk is two steps.

First, install the package: npm install --save redux-thunk

Then, wherever you have your Redux setup code, you need to import redux-thunk and insert its middleware into Redux:

    // You probably already import createStore from 'redux'
    // You'll need to also import applyMiddleware
    import { createStore, applyMiddleware } from 'redux';

    // Import the `thunk` middleware
    import thunk from 'redux-thunk';

    // Import your existing root reducer here.
    // Change this path to fit your setup!
    import rootReducer from './reducers/index';

    // The last argument to createStore is the "store enhancer".
    // Here we use applyMiddleware to create that based on
    // the thunk middleware.
    const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
    );