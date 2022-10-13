import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        blurRadius={10}
        style={styles.background}
        source={require('../assets/background.jpg')} >

            <View style={styles.logoContainer} >
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text style={styles.tagline} >Sell What You Don't Need</Text>
            </View>

            <View style={styles.buttonContainer} >
                <AppButton title='Login' />
                {/* Pass 'secondary' color as prop to 'AppButton' */}
                <AppButton title='Register' color='secondary' />
            </View>

        </ImageBackground>
    );
}

export default WelcomeScreen;


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',  //Pushes all items in container to bottom
        alignItems: 'center'         //Centers all items in container along secondary axis
    },
    buttonContainer: {
        padding: 20,
        width: '100%'
    },
    logo: {
        width: 100, 
        height: 100,
    },
    logoContainer: {
        position: 'absolute',   //Positions items relative to container
        top: 70,
        alignItems: 'center'    //Centers all items in container along secondary axis
    },
    tagline: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20
    }
})