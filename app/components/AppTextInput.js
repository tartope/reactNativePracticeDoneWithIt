import React from 'react';
import { TextInput, View, StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';

//use the rest operator to get the other props and put them inside a single object
function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container} >
            {/* makes the icon optional with conditional rendering */}
            {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
            {/* import default styles from styles file; use spread operator to add other props */}
            <TextInput style={defaultStyles.text} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: defaultStyles.colors.light,
        //give rounded corners
        borderRadius: 25,
        //so icon and text input are laid out horizontally
        flexDirection: 'row',
        //so the container stretches to fill the container
        width: '100%',
        //to give room in the container
        padding: 15,
        //separates multiple text inputs on the same screen
        marginVertical: 10
    },
    icon:{
        marginRight: 10
    }
})

export default AppTextInput;