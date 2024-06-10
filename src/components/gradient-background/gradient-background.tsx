import { View, Text, ImageBackground } from "react-native";
import React, { ReactElement, ReactNode } from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

type GradienBackgroundProps = {
  children: ReactNode;
};


export default function GradienBackground({
  children,
}: GradienBackgroundProps): ReactElement {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style='light' />
      <ImageBackground
        source={require('../../../assets/images/bg.jpg')} // Adjust the path to your image
        style={{ flex: 1, width: '100%', height: '100%' }}
      >
        {children}
      </ImageBackground>
    </View>
  );
}


/*
export default function GradienBackground({
  children,
}: GradienBackgroundProps): ReactElement {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style='light' />
      <LinearGradient
        style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
        colors={['#171716', '#171716']}
      />
      {children}
    </View>
  );
}
*/