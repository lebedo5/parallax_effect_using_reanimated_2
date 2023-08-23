import React from "react";
import { useWindowDimensions } from "react-native"
import Animated, {
  interpolate,
  SensorType,
  useAnimatedSensor,
  useAnimatedStyle,
  withTiming
} from "react-native-reanimated";

const OFFSET_SPACE = 100
const HALF_PI = Math.PI / 2

const SensorAnimatedImage = ({ image, slowdownIndex = 1 }) => {
  const { width, height } = useWindowDimensions();
  const sensor = useAnimatedSensor(SensorType.ROTATION)

  const imageStyle = useAnimatedStyle(() => {
    const { pitch, roll } = sensor.sensor.value

    return {
      top: withTiming(interpolate(pitch, [-HALF_PI, HALF_PI], [(-2 * OFFSET_SPACE) / slowdownIndex, 0]), { duration: 100 }),
      left: withTiming(interpolate(roll, [-HALF_PI, HALF_PI], [(-2 * OFFSET_SPACE) / slowdownIndex, 0]) , { duration: 100 }),
    }
  })

  return (
    <Animated.Image source={image} style={[imageStyle, {
      width: width + (2 * OFFSET_SPACE) / slowdownIndex,
      height: height + (2 * OFFSET_SPACE) / slowdownIndex,
      position: "absolute"
    }]} />
  )
}

export default SensorAnimatedImage
