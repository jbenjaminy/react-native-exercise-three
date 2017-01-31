/*  ListItem component responsible for showing a single library
 *  each library item has a title, description and id.
 *  needs to know whether it is selected or not, so must get access to state */
import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
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
    /*  ORIGINAL RENDER-DESCRIPTION HELPER FUNCTION:
            `renderDescription() {
                const { library, selectedLibraryId } = this.props;
                if (library.id === selectedLibraryId) {
                    return (
                        <Text>(library.description)</Text>
                    );
                }
            }`
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

const mapStateToProps = state => {
    return { selectedLibraryId: state.selectedLibraryId };
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
