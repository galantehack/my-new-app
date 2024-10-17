import React from 'react';
import { View, Text, Linking, StyleSheet, Alert, ScrollView } from 'react-native';

const CreditsScreen = () => {
  const credits = [
    { title: 'Notas Musicales', url: 'https://www.flaticon.com/free-animated-icons/musical-note', author: 'Freepik' },
    { title: 'Flores', url: 'https://www.flaticon.com/free-animated-icons/flower', author: 'iconixar' },
    { title: 'Corazón', url: 'https://www.flaticon.com/free-animated-icons/heart', author: 'surang' },
    { title: 'Casco', url: 'https://www.flaticon.com/free-animated-icons/helmet', author: 'Freepik' },
    { title: 'Esqueleto', url: 'https://www.flaticon.com/free-animated-icons/skeleton', author: 'Freepik' },
    { title: 'Triste', url: 'https://www.flaticon.com/free-animated-icons/sad', author: 'iconixar' },
    { title: 'Emoticono', url: 'https://www.flaticon.com/free-animated-icons/emoticon', author: 'Freepik' },
    { title: 'Lo Siento', url: 'https://www.flaticon.com/free-animated-icons/sorry', author: 'iconixar' },
    { title: 'Sí', url: 'https://www.flaticon.com/free-animated-icons/yes', author: 'surang' },
    { title: 'Ahogamiento', url: 'https://www.flaticon.com/free-animated-icons/drowning', author: 'Freepik' },
    { title: 'Acuerdo', url: 'https://www.flaticon.com/free-animated-icons/deal', author: 'iconixar' },
    { title: 'Usuario', url: 'https://www.flaticon.com/free-animated-icons/user', author: 'Freepik' },
  ];

  // Función para abrir los enlaces de forma segura
  const handleLinkPress = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      Alert.alert('Error', 'No se puede abrir el enlace: ' + url);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Créditos</Text>
      {credits.map((credit, index) => (
        <Text style={styles.creditText} key={index} accessible={true} accessibilityRole="link">
          Iconos creados por{' '}
          <Text style={styles.linkText} onPress={() => handleLinkPress(credit.url)}>
            {credit.title}
          </Text>{' '}
          de{' '}
          <Text style={styles.linkText} onPress={() => handleLinkPress('https://www.flaticon.com')}>
            www.flaticon.com
          </Text>{' '}
          por{' '}
          <Text style={styles.linkText} onPress={() => handleLinkPress('https://www.flaticon.com/authors/' + credit.author.toLowerCase())}>
            {credit.author}
          </Text>
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  creditText: {
    fontSize: 16,
    marginBottom: 10,
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default CreditsScreen;
