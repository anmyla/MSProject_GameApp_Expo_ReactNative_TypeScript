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
import { Auth, Hub } from "aws-amplify";
import { useAuth } from "../../contexts/auth-context";


type AppBootstrapProps = {
  children: ReactNode;
};



export default function AppBootstrap({
  children,
}: AppBootstrapProps): ReactElement {
  const [fontsLoaded] = useFonts({
    "DeliusUnicase-Bold": require("../../../assets/fonts/DeliusUnicase-Bold.ttf"),
    "DeliusUnicase-Regular": require("../../../assets/fonts/DeliusUnicase-Regular.ttf"),
  });

  const [authLoaded, setAuthLoaded] = useState(false);
  const {setUser} = useAuth();

  useEffect(() => {
    async function checkCurrentUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
      } catch (error) {
        console.log(error);
        setUser(null);
      }
      setAuthLoaded(true);
    }
    checkCurrentUser();

    function hubListener(hubData: any) { 
      const{data,event} = hubData.payload;
      switch(event) {
        case "signOut": setUser(null);
        break;
        case "signIn": setUser(data);
        break;
      default:
      break;
    }

    }

      Hub.listen("auth", hubListener);
      return () => Hub.remove("auth", hubListener); 
  }, []);

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
    if (fontsLoaded && authLoaded) {
      setAppIsReady(true);
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, authLoaded]);

  if (!fontsLoaded || !authLoaded) {
    return <View />;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {appIsReady && authLoaded && children}
    </View>
  );
}
