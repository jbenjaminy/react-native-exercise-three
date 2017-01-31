import React, { Component } from 'react';
import { connect } from 'react-redux';
/*
 *  use a connect helper to get access to the redux store in the LibraryList
    component.
 *  Theory behind rendering a large list of items:
    *   long list of items, only see the top several and scroll to see more.
    *   with current approach we take a single item from our data, instantly map
        it and create a distinct component. Thus one component for every item.
    *   downside to this approach is that for large lists, even if our user
        only sees a few items at a time, we have to go to all of this work
        upfront to create components for all items. The remaining components
        might just be sitting there in memory. This is an indication of poor
        performance.
    *   mobile devices are typically memory constrained, so anytime we can reduce
        our memory footprint inside of our app, it is definitely a good thing.
    *   to address this performance issue, react native includes a little tool
        called listview -- listview is a component, that remedies this issue of
        rendering a bunch of items by using a little trick.
        *   it figures out which items of the list are visible to a user at a
            given time, and then creates a component only for the items to be
            rendered on the screen.
        *   the list view watches for any scroll-event by the user, and watches
            for any item that is about to move out of view.
        *   list view will take this instance of the component, move it down to
            the bottom of the screen, and swaps out the new item that is entering
            the view from the other end of the screen.
        *   reuses the same set of components over and over and only renders a
            subset of the total items at any given time.
 */

class LibraryList extends Component {
    render() {
        console.log(this.props);
        return;
    }
}

/*
 *  purpose of 'mapStateToProps' is to take our global application state, and
    then take some of the properties off of that state object and match them as
    'props' in our component.

 *  if we place a console.log() inside this function, we expect it to get called
    with one argument, 'state'. we get back the array of libraries objects.

 *  this libraries piece of state already had some data in it, some amount of
    initial state, therefore we have to design our reducers with the mindset
    that they will be run over and over again, and at different points in time.
 */
const mapStateToProps = state => {
    return { libraries: state.libraries };
};

/*
 *  we call connect and when connect is called it returns another function; we
    then immediately call that return function, passing the LibraryList to it.
 *  redux concepts are not that difficult to understand -- moreso the terminology,
    syntax, and implementation.
 */
export default connect(mapStateToProps)(LibraryList);
