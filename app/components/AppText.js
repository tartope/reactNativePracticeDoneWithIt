import React from 'react';
import { Text } from 'react-native';

import defaultStyles from '../config/styles';

function AppText({ children, style }) {
    return (
        // import default styles from styles file
        <Text style={[defaultStyles.text, style]}>{ children }</Text>
    );
}

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
