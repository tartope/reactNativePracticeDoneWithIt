import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Icon({
    //destructered props for styling with default values
    name,
    size = 40,
    backgroundColor = '#000',
    iconColor = '#fff'
}) {
    return (
        //this view is the container for the icon with bunch of styles
        <View style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: backgroundColor,  //or just 'backgroundColor' on this line b/c the name is similar to the prop being passed (if the key and value are the same, can remove the value and just use the key).
            //justifyContent and alignItems puts the icon in the center of the circle.
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {/* add icon inside container; import MaterialCommunityIcons */}
            {/* 'size' makes the icon half the size of its circle */}
            <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5}/>
        </View>
    );
}

export default Icon;