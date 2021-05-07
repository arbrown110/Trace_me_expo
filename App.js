import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, SafeAreaView } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text clicked")
  return (
    <SafeAreaView style={styles.container}>
     <Text onPress={handlePress}>Enter</Text>
      <TouchableOpacity onPress={() => console.log("Image being pressed")}>
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
        onPress={() => console.log("Button pushed")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// Touchable Opacity , Touchable highlight, Touchablewithoutfeedback are options for on press of image. Also onPress and onLongPress.