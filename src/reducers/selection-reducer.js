/*  Redux is set up so that if return undefined, it assumes you have an error,
    so must have a defined return value for initial state.
 *  We can even return null, since its not undefined, and it makes sure that if
    we call this thing at any given time, it does not default to a pre-selected
    row */
export default (state, action) => {
    console.log(action);
    return null;
};
