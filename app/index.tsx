import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";
import BulletPoints from "@/components/ui/BulletPoints";
import { Colors } from "@/constants/Colors";
import CarouselCard from "@/components/CarouselCard";
import { data } from "@/constants/data";
import PaginationIndicator from "@/components/PaginationIndicator";

const index = () => {
  const router = useRouter();
  const [paginationIndex, setPaginationIndex] = useState(0);

  const onScrollHandler = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const totalWidth = e.nativeEvent.layoutMeasurement.width;
    const xPosition = e.nativeEvent.contentOffset.x + 200;
    const current = Math.floor(xPosition / totalWidth);
    setPaginationIndex(current);
  };

  const mainPoints = [
    "switch or add tracks anytime as you grow",
    "complete your track to unlock new skills and projects!",
  ];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/main-page-bg.png")}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.headerContainer}>
            <View>
              <ThemedText
                lightColor={"#A3A3A3"}
                darkColor={"#A3A3A3"}
                style={styles.title}
                type="title"
              >
                pick your track
              </ThemedText>
              <ThemedText
                lightColor={"#EFD84C"}
                darkColor={"#EFD84C"}
                style={styles.title}
                type="title"
              >
                time to build 🚀
              </ThemedText>
            </View>
            <Image
              source={require("@/assets/images/header-image.png")}
              style={styles.headerImage}
            />
          </View>
          <BulletPoints points={mainPoints} />
          <FlatList
            data={data}
            keyExtractor={(item) => item.name}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            // onScroll={onScrollHandler} // calculate scroll index on live change
            onMomentumScrollEnd={onScrollHandler} // calculate scroll index after the scroll complete
            renderItem={({ item }) => (
              <Pressable onPress={() => router.push(item.route)}>
                <CarouselCard
                  gif={item.image}
                  title={item.title}
                  description={item.description}
                />
              </Pressable>
            )}
            style={styles.carouselItem}
          />
          <PaginationIndicator items={data} paginationIndex={paginationIndex} />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  bgImage: {
    flex: 1,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 26,
  },
  title: {
    fontSize: 22,
  },
  headerImage: {
    height: 80,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  carouselItem: {
    paddingLeft: 26,
  },
});
