import React from 'react';
import { TextInput, View, StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

//use the rest operator to get the other props and put them inside a single object
function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container} >
            {/* makes the icon optional with conditional rendering */}
            {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />}
            {/* use spread operator to add other props */}
            <TextInput style={styles.textInput} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.light,
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
    },
    textInput: {
        color: colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
    }
})

export default AppTextInput;