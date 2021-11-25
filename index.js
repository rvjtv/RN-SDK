import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
// import { WebView } from "react-native-webview";
// import LottieView from 'lottie-react-native';

class HelloWorld extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Yo, Feed !</Text>
        {/* <WebView
          style={{ height: "100%", width: "100%" }}
          source={{ uri: "http://google.com/" }}
        /> 
        <LottieView source={require('./feed-main.json')} autoPlay loop />*/}
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  hello: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

AppRegistry.registerComponent("SdkApp", () => HelloWorld);
