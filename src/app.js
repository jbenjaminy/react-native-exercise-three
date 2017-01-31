import React from 'react';
import { View } from 'react-native';
// provider communicates between store and react
// Redux is not react specific -- designed with react in mind, but not designed
    // SOLELY for react
// react-redux library is the communication glue between the two frameworks
import { Provider } from 'react-redux';
// creates our store object
import { createStore } from 'redux';
import reducers from './reducers';

const App = () => {
    return (
        {/*
            Created a store and passed it to the Provider tag, also passed the
            reducers to the store.
        */}
        <Provider store={createStore(reducers)}>
            <View />
        </Provider>

    );
};

export default App;
