import { TextInput, View, StyleSheet, Text, Alert } from "react-native";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { useState } from "react";


import Colors from "../constant/colors.js";
import { Title } from "../components/ui/Title.js";

export const StartGameScreen = ({ onPickNumberProp }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const resetInputHandler = () => {
    setEnteredNumber(""); //input alanını boşaltır
  };

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const confirmInputHandler = () => {
    const num = parseInt(enteredNumber); //enteredNumber ı stringten inte çevirip num a atıyoruz

    if (isNaN(num) || num <= 0 || num > 99) {
      //num ı kontrol ediyoruz
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
    }
    onPickNumberProp(num); //num ı propla app.js e gönderdik
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.text}>Enter a Number</Text>
          <TextInput
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
            value={enteredNumber}
            onChangeText={numberInputHandler}
          />
          {/* maxLength={2} , bununla sadece iki rakamlı bir sayı yazabilirim 
        keyboardType="number-pad" , sadece sayı klavyesi çıkmasını sağlar*/}
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressProp={confirmInputHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
    marginTop: 100,
    flex: 1,
  },
  inputContainer: {
    // flex:1, //tüm sayfayı kaplar
    marginTop: 100,
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
  text: {
    color: Colors.yellow,
    fontSize: 16,
  },
  numberInput: {
    color: Colors.yellow,
    borderBottomColor: Colors.yellow,
    borderBottomWidth: 2,
    fontSize: 30,
    textAlign: "center",
    height: 50,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
