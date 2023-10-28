import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, View } from "react-native";
import useFormStore from "../store/formStore.js";

export const PickerSelect = ({ items, placeholderlabel, onChange }) => {
  return (
    <View style={styles.container}>
      <RNPickerSelect
        placeholder={{ label: placeholderlabel, value: null }}
        onValueChange={(value, index) => {
          onChange(value, index);
          console.log(index);
        }}
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
