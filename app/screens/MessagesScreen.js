import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar, View } from 'react-native';
//Gives information about the current platform.
import Constants from 'expo-constants';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';

const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/Tunisia.jpeg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    }
]

function MessagesScreen(props) {
    return (
        <Screen>
            <FlatList 
            data={messages}
            keyExtractor={message => message.id.toString()} 
            renderItem={({ item })=> (
                <ListItem 
                title={item.title} 
                description={item.description} 
                image={item.image} 
                onPress={()=> console.log('message selected', item)}
                />
            )}
            ItemSeparatorComponent={ListItemSeparator}
            />
            
        </Screen>
    );
}

const styles = StyleSheet.create({
    //Below styling was replaced with 'Screen' component that was created and imported.
    // screen:{
    //     //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    //     paddingTop: Constants.statusBarHeight  //Can use this line after install/import 'Constants, or use above after import 'StyleSheet', 'Platform', and 'StatusBar'.
    // }
})

export default MessagesScreen;