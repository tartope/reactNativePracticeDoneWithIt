import React from "react";
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, 
//   Text, 
//   View, 
//   SafeAreaView, 
//   Image, 
//   TouchableWithoutFeedback, 
//   TouchableOpacity, 
//   TouchableHighlight, 
//   Button, 
//   Alert,
//   StatusBar, 
//   Platform, 
//   Dimensions
// } from 'react-native';
// import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  //Below: Get dimensions of phone with this.
  // console.log(Dimensions.get('screen'));

  //Below: Get dimenstions of phone in portrait or landscape.
  //console.log(useDimensions());

  //Below: Shows if landscape or portrait is true/false.
  //console.log(useDeviceOrientation());

  //Makes components adjust to entire screen in landscape mode.
  // const orientation = useDeviceOrientation();  //<-- or destructure with line below, and add to 'height' (see further below)
  // const { landscape } = useDeviceOrientation();

  return (
    // <SafeAreaView style={styles.container}>
    // {/* <SafeAreaView style={{ backgroundColor: 'orange' }}> */}
    // {/* <SafeAreaView style={containerStyle}>  //See containerStyle variable below */}
    // {/* <SafeAreaView style={[styles.container, containerStyle]}>  //<--The object on the right overwrites the property of the objects on the left. */}

    //   {/* <Button title="Hello React" onPress={()=> console.log('button tapped1')} /> */}
    //   {/* <Button color='pink' title='Click me' onPress={()=> alert('Button tapped2')} /> */}
    //   {/* <Button color='orange' title="Hello React" onPress={()=> alert('button tapped3')} /> */}

    //   {/* to customize: import 'Alert' and add 'alert' or 'prompt' method to return statement; see below */}
    //   {/* <Button color='red' title="Hello React" 
    //   onPress={ ()=> Alert.alert('My Title', 'My Message', [
    //     {text: 'Yes', onPress: ()=> console.log('Yes')},
    //     {text: 'No', onPress: ()=> console.log('No')},
    //   ])} /> */}
    //   <Button color='purple' title="Hello React" 
    //   onPress={ ()=> Alert.prompt('My Title', 'My Message', text => console.log(text)) } />
    
    //   <Image source={require('./assets/favicon.png')} />

    //   {/* <Image blurRadius={10} source={{
    //     width: 200,
    //     height: 300,
    //     uri: 'https://picsum.photos/id/237/200/300' 
    //     }}/> */}
      

    //   {/* <TouchableWithoutFeedback onPress={()=> console.log('Image touchable without feedback')} >
    //     <Image source={{
    //       width: 200,
    //       height: 300,
    //       uri: 'https://picsum.photos/id/237/200/300' 
    //       }}/>
    //   </TouchableWithoutFeedback> */}

    //   {/* <TouchableOpacity onPress={()=> console.log('Image touchable opacity')} >
    //     <Image source={{
    //       width: 200,
    //       height: 300,
    //       uri: 'https://picsum.photos/id/237/200/300' 
    //       }}/>
    //   </TouchableOpacity> */}
      
    //   <TouchableHighlight onPress={()=> console.log('Image touchable highlight')} >
    //     <Image source={{
    //       width: 200,
    //       height: 300,
    //       uri: 'https://picsum.photos/id/237/200/300' 
    //       }}/>
    //   </TouchableHighlight>

    //   <View style={{ backgroundColor: 'dodgerblue', width: '100%', height: landscape ? '100%' : '30%' }}>

    //   </View>

    // </SafeAreaView>

    //Container below:

    // <View style={{ 
    //   backgroundColor: '#fff', 
    //   flex: 1, 
    //   flexDirection: 'row', //aligns across horizontal
    //   justifyContent: 'center', //aligns across main axis
    //   alignItems: 'center', //aligns across a secondary axis; determines alignment of items within each line.
    //   alignContent: 'center', //aligns all content in the center; determines alignment of entire content and only works with 'wrap'.
    //   // flexWrap: 'wrap'  //when 'wrap' is enabled, 'alignItems' behaves differently.
    //   }}>

    //Everything inside container below:
    
    //   <View style={{ backgroundColor: 'dodgerblue', width: 100,  height: 100 }}/>
    //   {/* <View style={{ backgroundColor: 'dodgerblue', flexBasis: 100, height: 100 }}/> */}
    //   {/* <View style={{ backgroundColor: 'dodgerblue', width: 380, flexGrow: 1, height: 100 }}/> */}
    //   {/* <View style={{ backgroundColor: 'dodgerblue', width: 380, flexShrink: 1, height: 100 }}/> */}
    //   {/* <View style={{ backgroundColor: 'dodgerblue', width: 380, flex: -1, height: 100 }}/> */}
    //   <View style={{ backgroundColor: 'gold', width: 100, height: 100 }}/>
    //   {/* <View style={{ backgroundColor: 'gold', width: 100, height: 100, top: 20, left: 20 }}/> */}
    //   <View style={{ backgroundColor: 'tomato', width: 100, height: 100 }}/>
    //   {/* <View style={{ backgroundColor: 'grey', width: 100, height: 100 }}/>
    //   <View style={{ backgroundColor: 'greenyellow', width: 100, height: 100 }}/> */}

    // </View>

    // <WelcomeScreen />
    <ViewImageScreen />
  );
}

// const containerStyle = { backgroundColor: 'orange'};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // paddingTop: Platform.OS === 'android' ? 20 : 0,
//     //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
