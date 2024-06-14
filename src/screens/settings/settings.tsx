import { View, Text, ScrollView, TouchableOpacity, Switch } from "react-native";
import React, { ReactElement } from "react";
import { GradienBackground } from "../../components";
import styles from "./settings.styles";
import { difficulty, useSettings } from "../../contexts/settings-context";

export default function Settings(): ReactElement | null {
  const { settings, saveSetting } = useSettings();
  if (!settings) {
    return null;
  }

  return (
    <GradienBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.field}>
          <Text style={styles.label}>
            SINGLE PLAYER MODE: DIFFICULTY LEVELS
          </Text>
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
