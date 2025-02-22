import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    CircularBook: require("../assets/fonts/CircularStd-Book.otf"),
    CircularLight: require("../assets/fonts/CircularStd-Light.otf"),
    CooperHewittMedium: require("../assets/fonts/CooperHewitt-Medium.otf"),
    NTBrickSans: require("../assets/fonts/NTBrickSans.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Colors.dark.background },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="(tabs)"
          options={{
            // presentation: "fullScreenModal",
            animation: "fade",
            animationDuration: 300,
            headerTitle: "",
            headerLeft: () => (
              <Pressable
                onPress={() => router.dismiss()}
                style={styles.backContainer}
              >
                <Ionicons
                  name="chevron-back"
                  size={20}
                  color={Colors.dark.backBtn}
                  style={styles.backIcon}
                />
                <Text style={styles.backText}>BACK</Text>
              </Pressable>
            ),
          }}
        />
      </Stack>
      <StatusBar style="auto" translucent backgroundColor="transparent" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  backContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  backIcon: {
    marginRight: 8,
  },
  backText: {
    fontSize: 14,
    fontFamily: "CooperHewittMedium",
    letterSpacing: 1.5,
    color: Colors.dark.backBtn,
  },
});
