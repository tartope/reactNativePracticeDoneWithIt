import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Icon({
    name,
    size = 40,
    backgroundColor = '#000',
    iconColor = '#fff'
}) {
    return (
        <View style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: backgroundColor,  //or just 'backgroundColor' on this line b/c the name is similar to the prop being passed.
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {/* 'size' makes the icon half the size of its circle */}
            <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5}/>
        </View>
    );
}

export default Icon;