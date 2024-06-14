import { ReactElement } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { Home, SinglePlayerGame, Settings, Login, SignUp } from "../screens";

export type StackNavigatorParams = {
  Home: undefined;
  SinglePlayerGame: undefined;
  Settings: undefined;
  Login: undefined;
  SignUp: undefined;
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
