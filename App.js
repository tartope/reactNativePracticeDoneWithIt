import React from "react";
// import { StatusBar } from 'expo-status-bar';
import { View, StatusBar } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import Card from './app/components/Card';

export default function App() {

  return (
    // <WelcomeScreen />
    <ListingDetailsScreen />
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



