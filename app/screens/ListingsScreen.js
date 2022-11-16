import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';

//will be change once connected to backend
const listings = [
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 100,
        image:require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: 1000,
        image:require('../assets/couch.jpg')
    }
];

function ListingsScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList 
                data={listings}
                //convert this number to a string b/c Flatlist expects a string as a unique identifier
                keyExtractor={listing =>listing.id.toString()}
                renderItem={({ item })=>
                    <Card 
                        title={item.title}
                        subTitle={"$" + item.price}
                        image={item.image}
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen:{
        padding: 20,
        backgroundColor: colors.light
    }
})

export default ListingsScreen;