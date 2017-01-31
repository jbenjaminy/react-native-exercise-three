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
