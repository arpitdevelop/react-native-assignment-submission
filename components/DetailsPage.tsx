import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { ThemedText } from "./ThemedText";
import DashedBorder from "./DashedBorder";
import { dataType, toolsIcons } from "@/constants/data";
import LevelLabel from "@/assets/images/level-badge.png";
import ToolsIcon from "@/assets/images/tools-icon.png";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  data: dataType;
}

export default function DetailsPage({ data }: Props) {
  const toolsList = toolsIcons.filter((tool) => data.tools.includes(tool.name));
  const mainPoints = [
    "You're assigned sub-skill based on your answers.",
    "you can change levels if you wish!",
  ];
  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      entering={FadeInDown.duration(500)}
      style={{ flex: 1, backgroundColor: Colors.dark.background }}
    >
      {/* Top right gradient */}
      <LinearGradient
        colors={["rgba(10, 10, 10, 1)", "transparent"]} // rgba(10, 10, 10, 1)
        style={styles.topRightShadow}
        locations={[0.07, 0.25]}
        start={{ x: 1, y: 0 }} // Gradient starts at the top-right
        end={{ x: 0, y: 2 }} // Gradient ends at the bottom-left
      />
      <Image source={data?.image} style={styles.image} />
      <Image source={LevelLabel} style={styles.label} />

      <View style={styles.textsContainer}>
        <ThemedText
          lightColor={Colors.light.mainText}
          darkColor={Colors.dark.mainText}
          style={styles.title}
          type="defaultSemiBold"
        >
          {data?.title}
        </ThemedText>

        <ThemedText
          lightColor={Colors.light.uiText}
          darkColor={Colors.dark.uiText}
          style={styles.description}
          type="default"
        >
          {data?.description.toLowerCase()}
        </ThemedText>
      </View>
      <DashedBorder
        color={Colors.dark.mainTitle1}
        dashWidth={10}
        dashGap={5}
        lineThickness={2}
      />
      <View style={styles.toolsContainer}>
        <View style={styles.toolsTextContainer}>
          <Image source={ToolsIcon} />
          <ThemedText
            lightColor={Colors.light.uiText}
            darkColor={Colors.dark.uiText}
            style={styles.toolsTitle}
            type="subtitle"
          >
            {`TOOLS COVERED (${data.tools.length})`}
          </ThemedText>
        </View>
        <FlatList
          horizontal
          data={toolsList}
          keyExtractor={(item) => item.name}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.toolIconContainer}>
              <View style={styles.toolImageContainer}>
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={styles.toolIcon}
                />
              </View>
              <Text style={styles.toolText}>{item.name.toUpperCase()}</Text>
            </View>
          )}
        />
      </View>
      <DashedBorder
        color={Colors.dark.mainTitle1}
        dashWidth={10}
        dashGap={5}
        lineThickness={2}
      />
      <View style={[styles.textsContainer, { marginBottom: 100 }]}>
        <ThemedText
          lightColor={Colors.light.mainText}
          darkColor={Colors.dark.mainText}
          style={[
            styles.title,
            { color: Colors.dark.uiText2, lineHeight: 33.6 },
          ]}
          type="defaultSemiBold"
        >
          lets choose your starting point for this track ⛳
        </ThemedText>
        <View>
          {mainPoints.map((point) => (
            <View key={point} style={styles.pointContainer}>
              <Ionicons
                name="checkmark"
                size={18}
                color={Colors.dark.primary}
                style={{ marginTop: 4 }}
              />
              <ThemedText type="default" style={styles.pointText}>
                {point}
              </ThemedText>
            </View>
          ))}
        </View>
      </View>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 260,
  },
  label: {
    width: 36.8,
    height: 47.2,
    position: "absolute",
    right: 13.2,
    top: 12.34,
    zIndex: 2,
  },
  topRightShadow: {
    position: "absolute",
    right: 0,
    width: 288,
    height: 196,
    zIndex: 1,
  },
  textsContainer: {
    flex: 1,
    gap: 12,
    marginVertical: 32,
    marginHorizontal: 20,
    // padding: 20,
  },
  title: {
    fontSize: 24,
    lineHeight: 30.24,
  },
  description: {
    fontSize: 18,
    lineHeight: 22.68,
  },
  toolsTitle: {
    fontSize: 14,
    lineHeight: 22.68,
    letterSpacing: 1.5,
  },
  toolsTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  toolsContainer: {
    flex: 1,
    marginVertical: 32,
    marginHorizontal: 20,
    gap: 24,
  },
  toolsList: {
    flexDirection: "row",
  },
  toolIconContainer: {
    marginHorizontal: 12,
    gap: 11,
    alignItems: "center",
  },
  toolImageContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  toolIcon: {
    width: "100%", // Fill the container width
    height: "100%",
  },
  toolText: {
    color: Colors.dark.uiText2,
    fontSize: 12,
    textAlign: "center",
    letterSpacing: 0.1,
  },
  pointContainer: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
    gap: 6,
  },
  pointText: {
    fontSize: 18,
    lineHeight: 25.2,
    color: Colors.dark.uiText,
  },
});
