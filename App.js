import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert, Image, SafeAreaView,  Platform, Dimensions } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';


export default function App() {
  const orientation = useDeviceOrientation ();
  // or const {landscape} = useDeviceOrienattion(); to set and calculate dynamically 
  // console.log(Dimensions.get("screen"));  // When rotated numbers don't change for dimensions
  // const handlePress = () => console.log("Text clicked")
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        BackgroundColor: 'dodgerblue', 
        width: "100%", height: "30%",
        }}></View> // to support oientations . You must change app.json to default for both portrait and landscape
      //when expressing make sure it is half 
     {/* <Text onPress={handlePress}>Enter</Text>
      <TouchableOpacity onPress={() => console.log('Image being pressed')}>
      <Image
        blurrRadius={5}
        fadeDuration={3000}

        source={{
        width: 200,
        height: 300,
        uri: "http://picsum.photos/200/300",
      }} 
      />
      </TouchableOpacity>
      <Button 
        color="green"
        title="Press to continue" 
        // onPress={() => Alert.prompt("Title", "Message", text => console.log(text))}
         onPress={() => Alert.Alert(" Title", "The message you want to put",[
           {text: "Enter", onPress: () => console.log("Enter")},
           {text: "Exit", onPress: () => console.log("Exit")},
         ])}
         /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? Statusbar.currentHeight : 0,
    paddingTop: Platform.OS === "Windows" ? Statusbar.currentHeight : 0
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});


// Touchable Opacity , Touchable highlight, Touchablewithoutfeedback are options for on press of image. Also onPress and onLongPress.