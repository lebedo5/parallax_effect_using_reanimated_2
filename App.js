import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import SensorAnimatedImage from "./src/components/SensorAnimatedImage";
import LockParallaxScreen from "./src/components/LockParallaxScreen";

const bg = require("./assets/images/bg.jpeg")
const layer2 = require("./assets/images/Parallax/2.png")
const layer3 = require("./assets/images/Parallax/3.png")
const layer4 = require("./assets/images/Parallax/4.png")
const layer5 = require("./assets/images/Parallax/5.png")




export default function App() {
  return (
    <View style={styles.container}>
      <LockParallaxScreen layers={[layer5, layer4, layer3, layer2]} />
      {/*<SensorAnimatedImage image={bg}/>*/}
      <StatusBar style="auto" />
    </View>
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
