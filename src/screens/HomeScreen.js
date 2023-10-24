import { Text, SafeAreaView, Image, View, StyleSheet } from "react-native";

import Animated, { FadeInUp } from "react-native-reanimated";

import waves from "../../assets/commercial-allies/waves-bg.png";

import homeImage from "../../assets/home-screen/home-image.jpeg";

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Animated.Image
        style={{ height: "146%", width: "100%", position: "absolute" }}
        entering={FadeInUp.delay(200).duration(1000).springify()}
        source={waves}
      />
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: 40,
          textAlign: "center",
        }}
      >
        AGUACHICA TURÍSTICA
      </Text>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Animated.Image
            style={styles.image}
            entering={FadeInUp.delay(200).duration(1000).springify()}
            source={homeImage}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "80%",
    marginTop: "10%",
    aspectRatio: 1, // Mantiene una relación de aspecto cuadrada
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
