import {
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";

// BACKGROUND
import waves from "../../assets/commercial-allies/waves-bg.png";
// ICONS
import light from "../../assets/commercial-allies/light.png";
// COMPONENTS
import { FormView } from "../components/FormView.js";

import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";

export const CommercialAlliesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image style={styles.wavesBg} source={waves} />

        {/* ICONS */}
        <View style={styles.iconsContainer}>
          <Animated.Image
            style={{ width: 65, height: 160 }}
            entering={FadeInUp.delay(200).duration(1000).springify()}
            source={light}
            className="h-[225] w-[90]"
          />
          <Animated.Image
            style={{ width: 90, height: 225 }}
            entering={FadeInUp.delay(400).duration(1000).springify()}
            source={light}
            className="h-[160] w-[65] opacity-75"
          />
        </View>

        <View style={styles.infoContainer}>
          <View style={{ flex: 1, alignItems: "center", marginBottom: "30%" }}>
            <Text style={styles.title}>¡Unete a nuestra comunidad!</Text>
          </View>

          <FormView />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  wavesBg: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  infoContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "space-around",
    paddingBottom: 10,
    paddingTop: "60%",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    position: "absolute",
  },
});
