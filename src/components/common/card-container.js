import React from 'react';
import { View } from 'react-native';

const CardContainer = (props) => (
        <View style={styles.viewStyle}>
            {props.children}
        </View>
);

const styles = {
    viewStyle: {
    // borders
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
    // shadowing
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    // spacing
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    // other styling
        elevation: 1
    }
};

export { CardContainer };
