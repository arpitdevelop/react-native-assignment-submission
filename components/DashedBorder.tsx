import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

type DashedLineProps = {
  color?: string; // Color of the dashed line
  dashWidth?: number; // Width of each dash
  dashGap?: number; // Gap between dashes
  lineThickness?: number; // Thickness of the line
  style?: object; // Additional styles for the line
};

const DashedLine = ({
  color = "black",
  dashWidth = 10,
  dashGap = 5,
  lineThickness = 2,
  style,
}: DashedLineProps) => {
  const screenWidth = Dimensions.get("window").width; // Get the screen width
  const dashCount = Math.floor(screenWidth / (dashWidth + dashGap)); // Calculate the number of dashes

  return (
    <View style={[styles.container, style]}>
      {Array.from({ length: dashCount }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dash,
            {
              width: dashWidth,
              height: lineThickness,
              backgroundColor: color,
              marginRight: dashGap,
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    opacity: 0.1,
  },
  dash: {
    borderRadius: 1, // Optional: Add rounded corners to dashes
  },
});

export default DashedLine;
