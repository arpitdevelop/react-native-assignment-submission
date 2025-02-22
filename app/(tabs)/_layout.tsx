import { withLayoutContext } from "expo-router";
import React from "react";
import { Colors } from "@/constants/Colors";

import {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";

// Method to support React Navigations's 'Material Top tabs' on Expo router
const { Navigator } = createMaterialTopTabNavigator();
export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function TabLayout() {
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarActiveTintColor: Colors.dark.primary,
        tabBarInactiveTintColor: Colors.dark.uiText2,
        tabBarIndicatorStyle: {
          backgroundColor: Colors.dark.primary,
          height: 3,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: "CooperHewittMedium",
          lineHeight: 19.6,
          letterSpacing: 1.5,
        },
        tabBarStyle: {
          backgroundColor: Colors.dark.background,
        },
        tabBarItemStyle: {
          borderRightWidth: 0.5,
          borderRightColor: Colors.dark.cardBorder,
        },
      }}
    >
      <MaterialTopTabs.Screen
        name="index"
        options={{ title: "INTRO TO\nWEB DEV" }}
      />
      <MaterialTopTabs.Screen
        name="python"
        options={{ title: "INTRO TO\nAI PYTHON" }}
      />
    </MaterialTopTabs>
  );
}
