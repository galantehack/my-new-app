import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import questions from './words'; // Asegúrate de que la ruta sea correcta

const QuizScreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const handleAnswer = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];
    
    // Actualizar puntaje si la respuesta es correcta
    if (selectedOption === currentQuestion.answer) {
      setScore(prevScore => prevScore + 1);
      Alert.alert("¡Correcto!", "¡Bien hecho!");
    } else {
      Alert.alert("Incorrecto", `La respuesta correcta es: ${currentQuestion.answer}`);
    }

    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsGameFinished(true); // Cambiar el estado para mostrar el resultado final
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsGameFinished(false); // Reiniciar el estado del juego
  };

  if (isGameFinished) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>¡Juego Terminado!</Text>
        <Text style={styles.score}>Tu puntuación es: {score} de {questions.length}</Text>
        <TouchableOpacity style={styles.option} onPress={restartQuiz}>
          <Text style={styles.optionText}>Reiniciar Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Bíblico</Text>
      <Text style={styles.question}>{currentQuestion.question}</Text>
      {currentQuestion.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() => handleAnswer(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  option: {
    backgroundColor: '#AEEEEE', // Fondo azul claro
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
  },
  optionText: {
    fontSize: 16,
    textAlign: 'center',
  },
  score: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default QuizScreen;
