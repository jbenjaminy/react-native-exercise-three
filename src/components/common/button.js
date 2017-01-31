import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity
            onPress={onPress}
            style={buttonStyle}
        >
            <Text style={textStyle}>Log in</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
    // sizing
        flex: 1,
    // layout
        alignSelf: 'stretch',
    // borders
        borderWidth: 1,
        borderRadius: 5,
    // coloring
        // close to iOS blue
        borderColor: '#007aff',
        backgroundColor: '#fff',
    // spacing
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
    // layout
        alignSelf: 'center',
    // coloring & effects
        color: '#007aff',
        fontWeight: '600',
    // sizing
        fontSize: 16,
    // spacing
        paddingTop: 10,
        paddingBottom: 10
    }
};

export { Button };
