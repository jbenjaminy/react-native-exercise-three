import React from 'react';
import { View } from 'react-native';
// provider communicates between store and react
// Redux is not react specific -- designed with react in mind, but not designed
    // SOLELY for react
// react-redux library is the communication glue between the two frameworks
import { Provider } from 'react-redux';
// creates our store object
/* Whenever we are working with redux and we hear the word 'data' we need to be
thinking in terms of the reducers' */
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/library-list';

const App = () => {
    return (
        /*
            Created a store and passed it to the Provider tag, also passed the
            reducers to the store.

            *Provider tag can only have one single child component. The child
            component can have any number of children.
        */
        <Provider store={createStore(reducers)}>
            <View>
                <Header headerText="Tech Stack" />
                <LibraryList />
            </View>
        </Provider>

    );
};

export default App;
