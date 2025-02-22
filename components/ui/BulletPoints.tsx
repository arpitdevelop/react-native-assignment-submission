import { StyleSheet, View, ViewStyle } from "react-native";
import React from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "../ThemedText";

interface Props {
  points: string[];
  style?: ViewStyle;
}

export default function BulletPoints({ points, style }: Props) {
  return (
    <View style={[styles.container, style]}>
      {points.map((point) => (
        <View key={point} style={styles.pointContainer}>
          <Ionicons
            name="checkmark"
            size={18}
            color={Colors.dark.primary}
            style={{ marginTop: 4 }}
          />
          <ThemedText type="default" style={styles.text}>
            {point}
          </ThemedText>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    gap: 12,
    paddingHorizontal: 26,
    paddingVertical: 12,
  },
  pointContainer: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
    gap: 6,
  },
  text: {
    fontSize: 18,
    color: Colors.dark.uiText,
  },
});
