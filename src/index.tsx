import { StyleSheet, Text, View, Image } from "react-native";
import { AppBootStrap } from "./components";
import Navigator from "./config/navigator";
import { SettingsProvider } from './contexts/settings-context';

export default function App() {
  return (
    <AppBootStrap>
      <SettingsProvider>
      <Navigator />
      </SettingsProvider>
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
