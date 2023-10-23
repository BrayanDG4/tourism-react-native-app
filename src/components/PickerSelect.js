import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, Text, View } from "react-native";

export const PickerSelect = ({ items, placeholderlabel }) => {
  return (
    <View style={styles.container}>
      <RNPickerSelect
        placeholder={{ label: placeholderlabel, value: null }}
        onValueChange={(value) => console.log({ value })}
        items={items}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 8,
    marginBottom: 8,
  },
});
