import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';


function ViewImageScreen(props) {
    return (
        <View style={styles.container} > 
            <View style={styles.closeIcon} >
                <MaterialCommunityIcons name='close' color={colors.white} size={35}/>
            </View>
            <View style={styles.deleteIcon} >
            <MaterialCommunityIcons name='trash-can-outline' color={colors.white} size={35}/>
            </View>
            {/* Resize mode fits image to screen: */}
            <Image resizeMode='contain' style={styles.image} source={require('../assets/chair.jpg')} />  
        </View>
    );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
    closeIcon: {
        position: 'absolute',   //Positions item relative to parent container
        top: 40,
        left: 30
    },
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    deleteIcon: {
        position: 'absolute',    //Positions item relative to parent container
        top: 40,
        right: 30
    },
    image: {
        width: '100%',
        height: '100%',
    }
})