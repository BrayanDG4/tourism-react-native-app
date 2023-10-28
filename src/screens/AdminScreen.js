import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

import { useState, useEffect } from "react";

import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { _URL } from "../global/globalConst";

export const AdminScreen = () => {
  const [allies, setAllies] = useState([]);

  const get = async () => {
    const URL = _URL;
    try {
      const response = await fetch(`${URL}/allys`);
      if (response.ok) {
        const result = await response.json();
        const initialAllies = result.allies.map((ally) => ({
          ...ally,
          completed: false, // Agrega un estado "completed" inicial a cada aliado
        }));
        setAllies(initialAllies);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error while fetching data: " + error);
    }

    console.log("estado: ", JSON.stringify(allies));
  };

  useEffect(() => {
    async function fetchData() {
      await get();
    }
    fetchData();
  }, []);

  const handleCompletionToggle = (id) => {
    // Cambia el estado "completed" del aliado con el ID correspondiente
    setAllies((prevAllies) =>
      prevAllies.map((ally) =>
        ally.id === id ? { ...ally, completed: !ally.completed } : ally
      )
    );
  };

  // Filtra los aliados que no están completados
  const activeAllies = allies.filter((ally) => !ally.completed);

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

        {allies.length > 0 ? (
          <FlatList
            data={activeAllies}
            keyExtractor={(ally) => ally.id.toString()}
            style={{ marginTop: "5%" }}
            renderItem={({ item }) => (
              <View style={styles.commerceContainer}>
                <View style={{ width: "80%" }}>
                  <Text>{item.commerce_name}</Text>
                </View>
                <View
                  style={{
                    width: "20%",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => handleCompletionToggle(item.id)}
                    style={{ width: "50%" }}
                  >
                    <FontAwesome name="check-square" size={32} color="green" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleCompletionToggle(item.id)}
                    style={{ width: "50%" }}
                  >
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
        ) : (
          <Text>Cargando...</Text>
        )}
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
