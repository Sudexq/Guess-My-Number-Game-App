import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constant/colors";

export const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.yellow,
    borderWidth: 3,
    borderRadius: 25,
    margin: 24,
    padding: 12,
    backgroundColor:"#fff5",
  },
  text: {
    color: Colors.yellow,
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal:100,
  },
});
