import { Text, TouchableOpacity } from "react-native";

export const CustomButton = ({
  text,
  bgColor,
  color,
  fontSize,
  borderRadius,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: "100%",
        paddingVertical: 16,
        backgroundColor: bgColor,
        borderRadius: borderRadius,
      }}
    >
      <Text
        style={{
          color: color,
          fontSize: fontSize,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
