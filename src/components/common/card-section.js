import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );

const styles = {
    containerStyle: {
    // borders & coloring
        borderBottomWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
    // spacing & orientation
        padding: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    }
};

export { CardSection };
