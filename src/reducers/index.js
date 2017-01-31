import { combineReducers } from 'redux';

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
export default combineReducers({
    libraries: () => []
});
