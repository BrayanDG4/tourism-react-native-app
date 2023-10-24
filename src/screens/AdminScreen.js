import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const AdminScreen = () => {
  const users = [
    { id: 1, name: "Usuario 1" },
    { id: 2, name: "Usuario 2" },
    { id: 3, name: "Usuario 3" },
  ];
  return (
    <SafeAreaView>
      {/* options container */}
      <View style={{ padding: 10 }}>
        {/* options */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Panel admnistrador</Text>
        </View>

        <View style={styles.optionMenu}>
          <TouchableOpacity style={styles.optionContainer}>
            <FontAwesome5 name="user-check" size={24} color="white" />
            <Text style={styles.optionText}>Solicitudes</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={users}
          keyExtractor={(user) => user.id.toString()}
          style={{ marginTop: "5%" }}
          renderItem={({ item }) => (
            <View style={styles.commerceContainer}>
              <View style={{ width: "80%" }}>
                <Text>{item.name}</Text>
              </View>
              <View
                style={{
                  width: "20%",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity style={{ width: "50%" }}>
                  <FontAwesome name="check-square" size={32} color="green" />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: "50%" }}>
                  <MaterialCommunityIcons
                    name="alpha-x-box"
                    size={36}
                    color="red"
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: "#0284c7",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  titleText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  optionMenu: {
    width: "100%",
    flexDirection: "row",
    gap: 4,
    marginTop: "5%",
  },
  optionContainer: {
    backgroundColor: "#0284c7",
    borderRadius: 50,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
  },
  optionText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  commerceContainer: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
  },
});
