import { StyleSheet } from "react-native";
import { AppBootStrap } from "./components";
import Navigator from "./config/navigator";
import { SettingsProvider } from "./contexts/settings-context";
import { Amplify } from "aws-amplify";
import config from "../aws-exports";
import { AuthProvider } from "./contexts/auth-context";

Amplify.configure(config);

export default function App() {
  return (
    <AuthProvider>
      <AppBootStrap>
        <SettingsProvider>
          <Navigator />
        </SettingsProvider>
      </AppBootStrap>
    </AuthProvider>
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
