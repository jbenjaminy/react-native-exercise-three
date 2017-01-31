/*  action creators are javascript functions - the component can dispatch an
    action to be created in our action creator which is then routed to the
    reducer to update the store of state.
*   our action creator will create an action and then immediately export it. */
export const selectLibrary => (libraryId) => {
    /*  here we return an object with a type property (i.e., an action)
     *  an action is how we cause our reducers to update the data they produce.
     *  the function wrapping the action is what we call an action creator.
     *  whenever we call this action creator, the return action will automatically
        dispatch and send off to all of our reducers. */
    return {
        type: 'select_library',
        payload: libraryId
    };
};
