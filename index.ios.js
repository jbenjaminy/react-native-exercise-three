/*
    REDUX OVERVIEW
        1) Action - an object that tells the reducer how to change its data.
        2) Reducer - a function that returns some data.
        3) State - data for our app to use.
        4) Store - an object that holds the application's data.

    *By default whenever we get application state with 'store.getState()'
    the reducer is ran and whatever the reducer returns is our application state.

    *Action is a plain JS object that defines a 'type' property (a 'string'), that
    tells our reducer to complete a particular type of action. Can only modify
    our application state in very finite ways.

    * Redux will help you to make a very large app with many features with
    minimal code.
*/

import { AppRegistry } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('tech_stack', () => App);


/*
    REDUX EXAMPLE
    const reducer = (state = [], action) => () => {
      if (action.type === 'split_string') {
        return action.payload.split('');
      } else if (action.type = 'add_character') {
        return [ ...state, action.payload ];
      } else {
      	return state;
      }
    };

    const store = Redux.createStore(reducer);

    store.getState();

    const action = {
      type: 'split_string',
      payload: 'asdf'
     };

    store.dispatch(action);

    store.getState();

    const action2 = {
      type: 'add_character',
      payload: 'a'
    };
*/
