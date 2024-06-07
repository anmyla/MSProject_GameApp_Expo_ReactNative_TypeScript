import React, {
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

type AppBootstrapProps = {
  children: ReactNode;
};

export default function AppBootstrap({
  children,
}: AppBootstrapProps): ReactElement {
  const [fontsLoaded] = useFonts({
    "DeliusUnicase-Bold": require("../../../assets/fonts/DeliusUnicase-Bold.ttf"),
  });

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      setAppIsReady(true);
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {appIsReady && children}
    </View>
  );
}
