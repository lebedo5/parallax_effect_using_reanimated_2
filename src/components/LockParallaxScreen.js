import React from "react";
import SensorAnimatedImage from "./SensorAnimatedImage";

const LockParallaxScreen = ({ layers }) => {
  return (
    <>
      {layers.map((layer, index) => (
        <SensorAnimatedImage
          key={`layer_${index}`}
          image={layer}
          slowdownIndex={index+1}
        />
      ))}
    </>
  )
}

export default LockParallaxScreen
