//All details to put contents inside a SafeAreaView will be in this component.  Simplier than writing it many times.
import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet } from 'react-native';

function Screen({ children }) {
    return (
        //Similar to 'AppText.js'; use the 'Screen' component exactly like 'SafeAreaView'.
        <SafeAreaView style={styles.screen}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1
    }
})

export default Screen;