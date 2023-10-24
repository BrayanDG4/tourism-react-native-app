import {
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  ToastAndroid,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { useForm, Controller } from "react-hook-form";

// BACKGROUND
import waves from "../../assets/commercial-allies/waves-bg.png";
// ICONS
import light from "../../assets/commercial-allies/light.png";
// COMPONENTS

import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";
import { CustomButton } from "../components/CustomButton";
import { AdminScreen } from "./AdminScreen";

export const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const navigation = useNavigation();

  const showToast = () => {
    ToastAndroid.show("Contraseña y/o usuario incorrecto", ToastAndroid.SHORT);
  };

  const isAdmin = (data) => {
    if (data.user === "admin" && data.password === "admin") {
      console.log("BIENVENIDO ADMIN");
      navigation.navigate("AdminScreen");
      return;
    }
    showToast();
    console.log("OH SHIT IS A RAT");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image style={styles.wavesBg} source={waves} />

        {/* LIGHTS */}
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
        {/* FORM */}
        <View style={styles.infoContainer}>
          <View style={{ flex: 1, alignItems: "center", marginBottom: "30%" }}>
            <Text style={styles.title}>Login Administrador</Text>
          </View>
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            style={styles.formContainer}
          >
            {errors?.Comercio &&
              (errors.Comercio.type === "maxLength" ||
                errors.Comercio.type === "validate") && (
                <Text style={{ color: "#ff6673" }}>
                  {errors.Comercio.message}
                </Text>
              )}

            <Controller
              control={control}
              name="user"
              render={({ field: { onChange, value, onBlur } }) => (
                <TextInput
                  style={styles.inputContainer}
                  iconName="person"
                  iconType="MaterialIcons"
                  placeholder="Usuario"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                />
              )}
              rules={{
                required: {
                  value: true,
                  message: "Campo requerido",
                },
                maxLength: {
                  value: 50,
                  message: "Longitud máxima 50 caracteres",
                },
              }}
            />

            {errors?.Correo && errors.Correo.type === "pattern" && (
              <Text style={{ color: "#ff6673" }}>{errors.Correo.message}</Text>
            )}

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value, onBlur } }) => (
                <TextInput
                  style={styles.inputContainer}
                  iconName="person"
                  iconType="MaterialIcons"
                  placeholder="Contraseña"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  secureTextEntry
                />
              )}
              rules={{
                required: {
                  value: true,
                  message: "Campo requerido",
                },
              }}
            />

            <CustomButton
              onPress={handleSubmit(isAdmin)}
              text={"Iniciar sesión"}
              bgColor={"#0284c7"}
              color={"white"}
              fontSize={18}
              borderRadius={8}
            />
          </Animated.View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#e2e8f0",
    paddingHorizontal: 5,
    borderRadius: 8,
    width: "100%",
    paddingVertical: 12,
    marginBottom: 8,
  },
  formContainer: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
    marginTop: "1rem",
  },
  container: {
    height: "100%",
    width: "100%",
  },
  wavesBg: {
    height: "146%",
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
