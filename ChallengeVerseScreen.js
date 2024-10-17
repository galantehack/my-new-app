import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import versesWithOptions from './versesWithOptions'; // Asegúrate de tener el archivo correcto

const ChallengeVerseScreen = () => {
  const [currentVerse, setCurrentVerse] = useState(0);
  const [score, setScore] = useState(0);

  const handleOptionPress = (option) => {
    // Verifica si la respuesta es correcta
    if (option === versesWithOptions[currentVerse].correctOption) {
      Alert.alert("¡Correcto!", versesWithOptions[currentVerse].explanation);
      setScore(prevScore => prevScore + 1); // Sumar al puntaje actual
    } else {
      Alert.alert("Incorrecto", "Intenta de nuevo.");
    }

    // Avanza al siguiente versículo, si está disponible
    if (currentVerse + 1 < versesWithOptions.length) {
      setCurrentVerse(prevVerse => prevVerse + 1);
    } else {
      Alert.alert("¡Has terminado!", "Vamos a mostrar tu puntaje final.");
    }
  };

  const handleRestart = () => {
    setCurrentVerse(0); // Reinicia al primer versículo
    setScore(0);        // Reinicia el puntaje
  };

  // Si se terminaron los versículos
  if (currentVerse >= versesWithOptions.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Juego Terminado</Text>
        <Text style={styles.score}>Tu puntaje: {score}/{versesWithOptions.length}</Text>
        <Button title="Reiniciar" onPress={handleRestart} />
      </View>
    );
  }

  // Desestructurar las propiedades del versículo actual para más legibilidad
  const { verse, options } = versesWithOptions[currentVerse];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desafío de Versículos</Text>
      <Text style={styles.verse}>{verse}</Text>
      <Text style={styles.question}>¿Cuál es la referencia de este versículo?</Text>
      {options.map((option, index) => (
        <Button key={index} title={option} onPress={() => handleOptionPress(option)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  verse: {
    fontSize: 18,
    marginVertical: 20,
    textAlign: 'center',
  },
  question: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ChallengeVerseScreen;
