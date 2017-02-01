/*  ListItem component responsible for showing a single library
 *  each library item has a title, description and id.
 *  needs to know whether it is selected or not, so must get access to state */
import React, { Component } from 'react';
import {
    TouchableWithoutFeedback,
    View,
    Text,
    LayoutAnimation
} from 'react-native';
/*  Previously used the connect helper to get access to the application state,
    but can also use the connect helper to get access to an action creator. */
import { connect } from 'react-redux';
import { CardSection } from './common';
/*  Inside of actions file, might have many different actions creators, whenever
    you want to export many things, just use the export keyword and not
    `export default ...`
 *  In the same way, whenever you want to import many things from a file at one
    time and get access to all of them, can import `* as` + some variable
    assignment. */
import * as actions from '../actions';

class ListItem extends Component {
    /*  Steps in the life on an onPress-event triggered action w/ animations:
         *  User presses on library.
         *  `onPress` event triggers a call to an action creator.
         *  The action creator returns an action.
         *  The action is sent out to all of the reducers.
         *  The reducers will re-run and assemble some amount of new application
            state.
         *  New application state automatically gets sent down to our
            `mapStateToProps` functions.
         *  Components re-render.
         *  View updates on the screen of the device.
            *   `LayoutAnimation` is a hook on this last step.
            *   If we call 'LayoutAnimation' anytime before our components
                updates are shown on the screen (lifecycle method,
                `componentWillUpdate`, is called precisely before our components
                update), all of the updates on the screen will be animated for
                us in any way possible.
                *   Any element moving around will have its movement animated
                    smoothly.
                *   Any text that appears will fade in slowly.
                *   Any text that disappears will fade out slowly.
            *   All we have to ensure is that we call `LayoutAnimation.spring()`
                before the update takes place.
            *   Only downside is that the text kind of bounces through at the
                bottom of the list. No eay workaround but not a huge thing. */
    // Called whenever component is about to re-render to the device.
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    {/* `flex: 1` here tells the text tag not to wrap itself or
                        overflow. */}
                    <Text style={{ flex: 1 }}>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    }

    /*  ORIGINAL RENDER-DESCRIPTION HELPER FUNCTION:
            `renderDescription() {
                const { library, selectedLibraryId } = this.props;
                if (library.id === selectedLibraryId) {
                    return (
                        <Text>(library.description)</Text>
                    );
                }
            }`
     *  with original mapStateToProps function:
            `const mapStateToProps = state => {
                 return { selectedLibraryId: state.selectedLibraryId };
             };`
     *  instead, need to pull out the logic and have a single prop that flags
        when we want to expand something.
    */
    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

/*  ownProps are the props that were passed to the component that we're
    wrapping. ListItem component is passed a library, referenced by
    `this.props.library`.
 *  ownProps is exactly equal to `this.props` inside of the component, so any
    props that are passed to the component will show up inside of
    mapStateToProps as ownProps.
 *  By getting access of ownProps inside of mapStateToProps can use some amount
    of pre-calculation or pre-determination here. */
const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
};

/*  Purpose of the first argument of the connect function is to mapStateToProps.
 *  Purpose of the second argument is to bind action creators.
 *  Don't have to explicitly dispatch when connect function is set up this way,
    only have to reference the specific action creator being called.
 *  Using mapStateToProps, should look like:
        `connect(mapStateToProps, actions)(ListItem)`
 *  Without mapStateToProps, should look like:
        `connect(null, actions)(ListItem)` */
export default connect(mapStateToProps, actions)(ListItem);
