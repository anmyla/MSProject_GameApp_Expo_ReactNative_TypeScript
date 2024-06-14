import React, {
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Auth } from "aws-amplify";

type AppBootstrapProps = {
  children: ReactNode;
};

type AuthContextType = {
  user: { [key: string]: any } | null;
  setUser: Dispatch<SetStateAction<{ [key: string]: any } | null>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AppBootstrap({
  children,
}: AppBootstrapProps): ReactElement {
  const [fontsLoaded] = useFonts({
    "DeliusUnicase-Bold": require("../../../assets/fonts/DeliusUnicase-Bold.ttf"),
    "DeliusUnicase-Regular": require("../../../assets/fonts/DeliusUnicase-Regular.ttf"),
  });

  const [user, setUser] = useState<{ [key: string]: any } | null>(null);

  const [authLoaded, setAuthLoaded] = useState(false);
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
    <AuthContext.Provider value ={{user, setUser}} >
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {appIsReady && authLoaded && children}
    </View>
    </AuthContext.Provider>
  );
}
