import { View, Text, ScrollView, TouchableOpacity, Switch } from "react-native";
import React, { ReactElement, useState } from "react";
import { GradienBackground } from "../../components";
import styles from "./settings.styles";

export default function Settings(): ReactElement {
  const [state, setState] = useState(false);

  const difficulty = {
    "1": "Beginner",
    "3": "Intermediate",
    "4": "Hard",
    "-1": "Impossible",
  };

  return (
    <GradienBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.field}>
          <Text style={styles.label}>DIFFICULTY LEVEL</Text>
          <View style={styles.choices}>
            {Object.keys(difficulty).map((level) => {
              return (
                <TouchableOpacity style={styles.choice} key={level}>
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
              true: "#ffffff",
            }}
            thumbColor={"#705B96"}
            value={state}
            onValueChange={() => {
              setState(!state);
            }}
          />
        </View>
        <View style={[styles.field, styles.switch]}>
          <Text style={styles.label}>HAPTICS</Text>
          <Switch
            trackColor={{
              false: "#444348",
              true: "#ffffff",
            }}
            thumbColor={"#705B96"}
            value={state}
            onValueChange={() => {
              setState(!state);
            }}
          />
        </View>
      </ScrollView>
    </GradienBackground>
  );
}
