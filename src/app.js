/*  REDUX:
    *   As our app begins to get more complicated, our code does not necessarily
        have to get complicated as well.
    *   Even though it is the case in this example, redux is not exactly designed
        for apps with just a couple pieces of state -- designed for apps with
        many pieces of state, many action-creators, many-reducers, etc. 6*/
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

const App = () => (
        /*
            Created a store and passed it to the Provider tag, also passed the
            reducers to the store.

            *Provider tag can only have one single child component. The child
            component can have any number of children.
        */
    <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
            <Header headerText="Tech Stack" />
            <LibraryList />
        </View>
    </Provider>

);

export default App;
