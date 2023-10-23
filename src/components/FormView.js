import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";

import { Form } from "../components/Form";

export const FormView = () => {
  return (
    <Animated.View
      entering={FadeInDown.duration(1000).springify()}
      style={styles.formContainer}
    >
      <Form/>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
    marginTop: "1rem",
  },
});
