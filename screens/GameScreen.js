import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";

import { Title } from "../components/ui/Title";

import { NumberContainer } from "../components/game/NumberContainer";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import Colors from "../constant/colors";

const generateRandomBetween = (min, max, exclude) => {
  const rdmNum = Math.floor(Math.random() * (max - min)) + min;

  if (rdmNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rdmNum;
  }
};

let maxBoundary = 100;
let minBoundary = 1;

export const GameScreen = ({ userNumberProp, gameOverProp }) => {
  const initialState = generateRandomBetween(1, 100, userNumberProp);
  const [currentGuess, setCurrentGuess] = useState(initialState);

  useEffect(() => {
    if (currentGuess === userNumberProp) {
      gameOverProp();
    }
  }, [currentGuess, userNumberProp, gameOverProp]);

  //direction = (lower, higher)
  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumberProp) ||
      (direction === "higher" && currentGuess > userNumberProp)
    ) {
      Alert.alert("Don't Lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(maxBoundary, minBoundary);

    const newRndVariable = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndVariable);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>

      <View style={styles.higherOrLowerContainer}>
        <Text style={styles.guessText}>Higher or Lower</Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPressProp={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPressProp={nextGuessHandler.bind(this, "higher")}>
            +
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 12,
  },
  higherOrLowerContainer: {
    padding: 15,
    backgroundColor: Colors.primary1,
    marginHorizontal: 24,
    borderRadius: 10,
    elevation: 4,
    //elevation ios ta kullanılmaz ios için aşağıdakiler kullanılır
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  guessText: {
    color: Colors.yellow,
    fontSize: 20,
  },
});
