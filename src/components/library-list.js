import React, { Component } from 'react';
import { connect } from 'react-redux';
/*
    use a connect helper to get access to the redux store in the LibraryList
    component.
*/

class LibraryList extends Component {
    render() {
        console.log(this.props);
        return;
    }
}

/* purpose of 'mapStateToProps' is to take our global application state, and
then take some of the properties off of that state object and match them as
'props' in our component.

* if we place a console.log() inside this function, we expect it to get called
with one argument, 'state'. we get back the array of libraries objects.

*/
const mapStateToProps = state => {
    return { libraries: state.libraries };
};

// we call connect and when connect is called it returns another function; we
    // then immediately call that return function, passing the LibraryList to
    // it.
// redux concepts are not that difficult to understand -- moreso the terminology,
    // syntax, and implementation.
export default connect(mapStateToProps)(LibraryList);
