import { ReactElement } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import {
  Home,
  SinglePlayerGame,
  Settings,
  Login,
  SignUp,
  ChangePassword,
  ForgotPassword,
  MultiplayerHome,
  MultiplayerGame,
} from "../screens";

export type StackNavigatorParams = {
  Home: undefined;
  SinglePlayerGame: undefined;
  Settings: undefined;
  Login: { redirect: keyof StackNavigatorParams } | undefined;
    SignUp: { username: string } | undefined;
  ChangePassword: undefined;
    ForgotPassword: undefined;
    MultiplayerHome: undefined;
    MultiplayerGame:
        | { gameID: string; invitee?: undefined }
        | { invitee: string; gameID?: undefined };

};

const Stack = createStackNavigator<StackNavigatorParams>();
const navigatorOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: "#2A2A2C",
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  headerTintColor: "#ffffff",
  headerTitleStyle: {
    fontFamily: "DeliusUnicase-Bold",
    fontSize: 20,
  },
  headerBackTitleStyle: {
    fontFamily: "DeliusUnicase-Bold",
    fontSize: 14,
  },
};

export default function Navigator(): ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={navigatorOptions}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SinglePlayerGame"
          component={SinglePlayerGame}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: "Sign Up" }}
        />
        <Stack.Screen
          name="ChangePassword"
          options={{ title: "Change Password" }}
          component={ChangePassword}
        />
        <Stack.Screen
          name="ForgotPassword"
          options={{ title: "Forgot Password" }}
          component={ForgotPassword}
        />
        <Stack.Screen
          name="MultiplayerHome"
          component={MultiplayerHome}
          options={{ title: "Multiplayer" }}
        />
        <Stack.Screen
          name="MultiplayerGame"
          component={MultiplayerGame}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
