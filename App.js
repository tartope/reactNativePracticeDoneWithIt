import React, { useState } from "react";
// import { StatusBar } from 'expo-status-bar';
import { View, StatusBar } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from './app/screens/MessagesScreen';
import Card from './app/components/Card';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from './app/components/AppTextInput';

export default function App() {

  const [firstName, setFirstName] = useState('');

  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <ListingDetailsScreen />
    //<MessagesScreen />
    // <Screen>
    //   <ListItem 
    //     title='My title' 
        
    //     ImageComponent={<Icon name='email' />}
    //   />
    // </Screen>
    // <AccountScreen />
    // <ListingsScreen />
    <Screen>
      <AppTextInput placeholder='Username' icon='email' />
    </Screen>

    // <View style={{
    //   backgroundColor: '#f8f4f4',
    //   padding: 20,
    //   paddingTop: 100
    // }}>

    //   <Card 
    //   title='Red jacket for sale'
    //   subTitle='$100'
    //   image={require('./app/assets/jacket.jpg')} />

    // </View>
  );
}



