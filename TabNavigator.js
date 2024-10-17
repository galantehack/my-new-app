import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importar íconos
import HomeScreen from './HomeScreen';  // Ajustar las rutas
import VerseScreen from './VerseScreen';
import QuizScreen from './QuizScreen';
import ChallengeVerseScreen from './ChallengeVerseScreen';
import CreditsScreen from './CreditsScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Verse" 
        component={VerseScreen} 
        options={{
          tabBarButton: (props) => null, // Esto oculta completamente el botón de la pestaña
        }} 
      />
      <Tab.Screen 
        name="Quiz" 
        component={QuizScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="question-answer" color={color} size={size} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Desafío de Versículos" 
        component={ChallengeVerseScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="star" color={color} size={size} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Créditos" 
        component={CreditsScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="credit-card" color={color} size={size} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Configuración" 
        component={SettingsScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings" color={color} size={size} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
