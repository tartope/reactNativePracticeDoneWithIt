//All details to put contents inside a SafeAreaView will be in this component.  Simplier than writing it many times.
import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet, View } from 'react-native';

function Screen({ children, style }) {
    return (
        //Similar to 'AppText.js'; use the 'Screen' component exactly like 'SafeAreaView'.
        <SafeAreaView style={[styles.screen, style]}>
            <View style={style}>{children}</View>
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