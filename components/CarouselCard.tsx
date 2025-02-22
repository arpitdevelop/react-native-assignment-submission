import {
  Image,
  type ImageSourcePropType,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";

import DownArrow from "../assets/images/Down_Arrow.png";

import { LinearGradient } from "expo-linear-gradient";

interface Props {
  gif: ImageSourcePropType;
  title: string;
  description: string;
}

export default function CarouselCard({ gif, title, description }: Props) {
  return (
    <View style={styles.cardContainer}>
      {/* Bottom gradient */}
      <LinearGradient
        colors={["rgba(10, 10, 10, 1)", "rgba(10, 10, 10, 0)"]}
        style={styles.bottomShadow}
        start={[0, 1]} // Bottom
        end={[0, 0]} // Top
      />
      {/* Top right gradient */}
      <LinearGradient
        colors={["rgba(10, 10, 10, 1)", "transparent"]} // rgba(10, 10, 10, 1)
        style={styles.topRightShadow}
        locations={[0, 0.2]}
        start={{ x: 1, y: 0 }} // Gradient starts at the top-right
        end={{ x: 0, y: 2 }} // Gradient ends at the bottom-left
      />

      <View style={styles.button}>
        <ThemedText
          lightColor={Colors.light.uiText2}
          darkColor={Colors.dark.uiText2}
          style={styles.buttonText}
          type="default"
        >
          VIEW TRACK DETAILS
        </ThemedText>
        <Image source={DownArrow} />
      </View>
      <Image source={gif} style={styles.gif} />
      <View style={styles.textsContainer}>
        <ThemedText
          lightColor={Colors.light.mainText}
          darkColor={Colors.dark.mainText}
          style={styles.title}
          type="defaultSemiBold"
        >
          {title}
        </ThemedText>

        <ThemedText
          lightColor={Colors.light.uiText}
          darkColor={Colors.dark.uiText}
          style={styles.description}
          type="default"
        >
          {description.toLowerCase()}
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 290,
    height: 465,
    marginRight: 16,
    borderWidth: 0.5,
    borderColor: Colors.dark.cardBorder,
    backgroundColor: Colors.dark.cardBg,
    overflow: "hidden", // Clip the shadow to the card's boundaries
  },
  gif: {
    width: 288,
    height: 196,
  },
  textsContainer: {
    flex: 1,
    gap: 12,
    padding: 20,
  },
  title: {
    fontSize: 21.6,
    lineHeight: 30.24,
  },
  description: {
    fontSize: 16.2,
    lineHeight: 22.68,
  },
  bottomShadow: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 200, // Adjust as needed for shadow height
    zIndex: 1,
  },
  topRightShadow: {
    position: "absolute",
    right: 0,
    width: 288,
    height: 196,
    zIndex: 1,
  },
  button: {
    position: "absolute",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    // width: 227,
    // height: 48,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    bottom: 20,
    borderWidth: 1,
    borderColor: Colors.dark.uiText2,
    zIndex: 1,
    gap: 10,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: "CooperHewittMedium",
    textAlign: "center",
    lineHeight: 19.6,
    marginTop: 3,
  },
});
