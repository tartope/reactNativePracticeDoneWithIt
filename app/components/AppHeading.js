import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

function AppHeading({ children }) {
    return (
            <Text style={styles.heading}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
    }
})

export default AppHeading;