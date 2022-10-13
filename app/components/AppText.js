import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

function AppText({ children, style }) {
    return (
        <Text style={[styles.text, style]}>{ children }</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
    }
})

export default AppText;

//This method returns on of these objects depending on the platform (add it to styleSheet with spread operator); or use above technique with 'styles.js'.
// Platform.select({
//     ios: {
//         fontSize: 20,
//         fontFamily: 'Avenir'
//     },
//     android: {
//         fontSize: 18,
//         fontFamily: 'Roboto'
//     }
// })

// const styles = StyleSheet.create({
//     text: {
//         fontSize: Platform.OS === 'android' ? 18 : 20,
//         fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
//     }
//     // text: {
//     //     color: 'tomato',
//     //     ...Platform.select({
//     //         ios: {
//     //             fontSize: 20,
//     //             fontFamily: 'Avenir'
//     //         },
//     //         android: {
//     //             fontSize: 18,
//     //             fontFamily: 'Roboto'
//     //         }
//     //     })
//     // }
// })
