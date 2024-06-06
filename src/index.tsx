import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { Game, Home } from "./screens";
import { AppBootStrap } from "./components";
import Navigator from "./config/navigator";

export default function App() {
  return (
    <AppBootStrap>
      <Navigator />
    </AppBootStrap>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
