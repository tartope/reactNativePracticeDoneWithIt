import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';

import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors';

//capitalized ImageComponent b/c it should be set to a real component
function ListItem({image, title, subTitle, IconComponent, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {/* renders image component only if we have the image prop; conditional statement to remove the empty space if there's no image */}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {/* renders subTitle only if we have the subTitle prop; conditionally renders subTitle */}
                        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white
    },
    detailsContainer:{
        marginLeft: 10,
        //if no subTitle, justifies content to center
        justifyContent: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    subTitle: {
        color: colors.medium
    },
    title: {
        fontWeight: '500'
    }
})

export default ListItem;