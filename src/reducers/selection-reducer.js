/*  Redux is set up so that if return undefined, it assumes you have an error,
    so must have a defined return value for initial state.
 *  We can even return null, since its not undefined, and it makes sure that if
    we call this thing at any given time, it does not default to a pre-selected
    row */
export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.data;
        default:
            return state;
    }
};

/*  By convention, every reducer we create is going to have a `switch` statement
    inside of it that is going to switch over the action.type.
 *  Need to have a default case and also need to return a non-undefined value
    for the first time the reducer is run. So must set an initial state default
    argument `state = null` (as seen in line 6).*/
