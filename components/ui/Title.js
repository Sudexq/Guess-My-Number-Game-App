import React from "react";
import { Text, StyleSheet } from "react-native";

import Colors from "../../constant/colors.js";

export const Title = ({ children }) => {
  return <Text style={styles.titleOfPage}>{children}</Text>;
};
const styles = StyleSheet.create({
  titleOfPage: {
    fontSize: 28,
    color: Colors.yellow,
    marginTop: 25,
    width: "80%",
    textAlign: "center",
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderColor: "yellow",
    paddingBottom: 10,
  },
});
