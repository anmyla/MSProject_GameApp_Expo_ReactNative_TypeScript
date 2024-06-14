import React, {
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const difficulty = {
  "1": "Breezy",
  "3": "Tough",
  "-1": "Savage",
};

type SettingsType = {
  difficulty: keyof typeof difficulty;
  haptics: boolean;
  sounds: boolean;
};

const defaultSettings: SettingsType = {
  difficulty: "1",
  haptics: true,
  sounds: true,
};

type SettingsContextType = {
  settings: SettingsType | null;
  loadSettings: () => void;
  saveSetting: <T extends keyof SettingsType>(
    setting: T,
    value: SettingsType[T]
  ) => void;
};

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

function useSettings(): SettingsContextType {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error(
      "useSettings must be used with a Settings Provider component"
    );
  }
  return context;
}

function SettingsProvider(props: { children: ReactElement }): ReactElement {
  const [settings, setSettings] = useState<SettingsType | null>(null);

  const saveSetting = async <T extends keyof SettingsType>(
    setting: T,
    value: SettingsType[T]
  ) => {
    try {
      const oldSettings = settings ? settings : defaultSettings;
      const newSettings = { ...oldSettings, [setting]: value };
      const jsonSettings = JSON.stringify(newSettings);
      await AsyncStorage.setItem("@settings", jsonSettings);
      setSettings(newSettings);
    } catch (error) {
      Alert.alert("Error: An error has occured in saving your settings.");
    }
  };

  const loadSettings = async () => {
    try {
      const stroreSettings = await AsyncStorage.getItem("@settings");
      stroreSettings !== null
        ? setSettings(JSON.parse(stroreSettings))
        : setSettings(defaultSettings);
    } catch (error) {
      setSettings(defaultSettings);
    }
  };

  useEffect(() => {
    loadSettings();
  }, []);

  return (
    <SettingsContext.Provider
      {...props}
      value={{
        settings,
        saveSetting,
        loadSettings,
      }}
    />
  );
}
export { useSettings, SettingsProvider, difficulty };
