import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { StartGameScreen } from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { GameScreen } from "./screens/GameScreen";

import Colors from "./constant/colors.js";
import { GameOverScreen } from "./screens/GameOverScreen.js";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    //num ı alıp userNumber a setledi
    setGameOver(false);
  };

  const gameOverHandler = () => {
    setGameOver(true);
  };

  let screen = <StartGameScreen onPickNumberProp={pickedNumberHandler} />;
  //varsayılan screen olarak ayarlanıyor
  //num ı propla alıp pickedNumberHandler() a verdik

  if (userNumber) {
    //userName (num doğru girilmişse) valid ise eğer o zaman screenı değiştir
    screen = (
      <GameScreen userNumberProp={userNumber} gameOverProp={gameOverHandler} />
    );
  }

  if (gameOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary2, Colors.primary1]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/dicePhoto.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen /* EKRANIMIZ */}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
