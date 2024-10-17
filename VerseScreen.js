import React from 'react';
import { StyleSheet, Text, View, Button, Share, Alert } from 'react-native';

const VerseScreen = ({ route }) => {
  // Recibimos el versículo desde la navegación
  const { verse } = route.params;

  // Función para compartir el versículo
  const shareVerse = async () => {
    try {
      await Share.share({
        message: verse,
      });
    } catch (error) {
      Alert.alert("Error", "No se pudo compartir el versículo.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Palabra en Sentimiento</Text>
      <View style={styles.card}>
        <Text style={styles.verseText}>{verse}</Text>
      </View>
      <Button title="Compartir Versículo" onPress={shareVerse} color="#2980b9" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#87CEEB', // Azul cielo
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff', // Color del texto del título
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: '#000', // Sombra del texto
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 3,
  },
  card: {
    backgroundColor: '#fff', // Color de fondo de la tarjeta
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5, // Para Android
    width: '100%', // Aseguramos que la tarjeta ocupe el ancho completo
  },
  verseText: {
    fontSize: 24,
    textAlign: 'center',
    color: '#333',
  },
});

export default VerseScreen;
