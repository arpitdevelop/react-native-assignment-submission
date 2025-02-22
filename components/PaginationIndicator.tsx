import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { dataTypes } from "@/constants/data";
import { Colors } from "@/constants/Colors";

interface Props {
  items: dataTypes;
  paginationIndex: number;
}

export default function PaginationIndicator({ items, paginationIndex }: Props) {
  return (
    <View style={styles.container}>
      {items.map((_, index) => (
        <View
          key={index}
          style={[styles.dash, paginationIndex === index && styles.activeDash]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    justifyContent: "center",
    gap: 10,
  },
  dash: {
    backgroundColor: Colors.dark.pagination,
    height: 2,
    width: 47,
    opacity: 0.3,
  },
  activeDash: {
    opacity: 1,
  },
});
