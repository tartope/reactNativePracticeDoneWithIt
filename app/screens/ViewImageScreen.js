import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors';


function ViewImageScreen(props) {
    return (
        <View style={styles.container} > 
            <View style={styles.closeIcon} ></View>
            <View style={styles.deleteIcon} ></View>
            {/* Resize mode fits image to screen: */}
            <Image resizeMode='contain' style={styles.image} source={require('../assets/chair.jpg')} />  
        </View>
    );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: 'absolute',   //Positions item relative to parent container
        top: 40,
        left: 30
    },
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',    //Positions item relative to parent container
        top: 40,
        right: 30
    },
    image: {
        width: '100%',
        height: '100%',
    }
})