import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

//Create 'color' default prop
function AppButton({ title, onPress, color='primary' }) {
    return (
        //Make array with two objects to override default button color; use bracket notation to call 'color' prop
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress} >
            <Text style={styles.text}>{ title }</Text>
        </TouchableOpacity>
    );
}

export default AppButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 10
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontweight: 'bold'
    }
})