import { combineReducers } from 'redux';
import LibraryReducer from './library-reducer';
/* REDUCERS
    * reducers produce our application state.
    * might have many different reducers in our app, and need to get them
    to all work properly together.
*/
/* DIFFERENT TYPES OF REDUCERS - THINKING PROCESS
    - what are the different variables/pieces of data for this app?
        - list of libraries.
        - currently selected library (most recent on the user tapped).
    => we could have two reducers:
        - 'library reducer'
            e.g., [
                { id: 1, name: 'React' },
                { id: 2, name: 'Redux' }
            ]

        - 'selection reducer'
            e.g., 1

            this is a separate reducer to just keep track of what item from the
            list to expand (by storing its id).
*/

/*
Because we set 'LibraryReducer' to this key 'libraries', if we ever
console.log our state object (e.g., `console.log(store.getState());`), we
expect the result to be:
        ` { libraries: [] }`
*/
export default combineReducers({
    libraries: LibraryReducer
});
