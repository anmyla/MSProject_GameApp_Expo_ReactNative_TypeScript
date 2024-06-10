import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
} from "react-native";
import React, { ReactElement, useEffect, useState } from "react";
import { GradienBackground } from "../../components";
import styles from "./settings.styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const difficulty = {
  "1": "Beginner",
  "3": "Intermediate",
  "4": "Hard",
  "-1": "Impossible",
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

export default function Settings(): ReactElement | null {
  const [settings, setSettings] = useState<SettingsType | null>(null);

  const saveSetting = async <T extends keyof SettingsType>(
    setting: T,
    value: SettingsType[T]
  ) => {
    try {
      const oldSettings = settings ? settings : defaultSettings;
      const newSettings = { ...oldSettings, [setting]: value };
      const jsonSettings = JSON.stringify(newSettings);
      await AsyncStorage.setItem("@setting", jsonSettings);
      setSettings(newSettings);
    } catch (error) {
      Alert.alert("Error: An error has occured in saving your settings.");
    }
  };

  const loadSettins = async () => {
    try {
      const settings = await AsyncStorage.getItem("@settings");
      settings !== null
        ? setSettings(JSON.parse(settings))
        : setSettings(defaultSettings);
    } catch (error) {
      setSettings(defaultSettings);
    }
  };

  useEffect(() => {
    loadSettins();
  }, []);

  if (!settings) {
    return null;
  }

  return (
    <GradienBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.field}>
          <Text style={styles.label}>DIFFICULTY LEVEL</Text>
          <View style={styles.choices}>
            {Object.keys(difficulty).map((level) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    saveSetting("difficulty", level as keyof typeof difficulty)
                  }
                  style={[
                    styles.choice,
                    {
                      backgroundColor:
                        settings.difficulty === level ? "#705B96" : "#171716",
                    },
                  ]}
                  key={level}
                >
                  <Text style={styles.choiceText}>
                    {difficulty[level as keyof typeof difficulty]}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={[styles.field, styles.switch]}>
          <Text style={styles.label}>SOUNDS</Text>
          <Switch
            trackColor={{
              false: "#444348",
              true: "#f2f2f2",
            }}
            thumbColor={"#705B96"}
            value={settings.sounds}
            onValueChange={() => {
              saveSetting("sounds", !settings.sounds);
            }}
          />
        </View>
        <View style={[styles.field, styles.switch]}>
          <Text style={styles.label}>HAPTICS</Text>
          <Switch
            trackColor={{
              false: "#444348",
              true: "#f2f2f2",
            }}
            thumbColor={"#705B96"}
            value={settings.haptics}
            onValueChange={() => {
              saveSetting("haptics", !settings.haptics);
            }}
          />
        </View>
      </ScrollView>
    </GradienBackground>
  );
}
