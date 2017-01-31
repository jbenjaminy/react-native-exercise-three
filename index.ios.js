/* APP OVERVIEW:
    App ={Connect}=> mapStateToProps => Provider => Store => App
                                     =libraries=> LibraryList
    Libraries Reducer => Store => libraries

    1) App boots up and redux creates a new store ('createStore' call)
        using the 'Libraries Reducer'.
    2) The instant the store is created we run this reducer one time,
        so we get a piece of state called 'libraries', which is an array
        containing a list of objects.
    3) After creating the store, we pass it to the provider as a prop, where its
        going to sit for the lifespan of our app. (Provider is a react components
        that aids in communication between react and redux).
    4) App component is rendered to the screen, which in turn renders the
        library-list component.
    5) When library-list component is about to render to the screen, the connect
        function boots up and reaches back upto the provider to gain access to
        the current state.
    6) Connect helper calls mapStateToProps with the app state, and then whatever
        object is returned will show up as props down into library-list.
*/

import { AppRegistry } from 'react-native';
import App from './src/app';

AppRegistry.registerComponent('tech_stack', () => App);

/* REDUX OVERVIEW
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
    minimal code. */

/* REDUX EXAMPLE
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
    }; */
