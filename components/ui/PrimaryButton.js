import { View, Text, StyleSheet, Pressable } from "react-native";

import Colors from "../../constant/colors.js";

export const PrimaryButton = ({ children, onPressProp }) => {
  //childeren propu kullanmak gerekiyor!!!!

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPressProp}
        android_ripple={{ color: Colors.buttonClickColor }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 50,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.buttonColor,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.25,
  },
});
