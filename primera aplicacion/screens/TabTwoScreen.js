import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from "../components/Themed";

export default function TabTwoScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Detalles Técnicos</Text>
      
      <Text style={styles.subtitle}>Tecnologías Utilizadas:</Text>
      <Text style={styles.text}>
        - **React Native** para la construcción de la interfaz de usuario.
        - **Expo** para la configuración y gestión del entorno de desarrollo.
        - **React Navigation** para gestionar las pantallas de la aplicación.
      </Text>

      <Text style={styles.subtitle}>Desafios en el Desarrollo:</Text>
      <Text style={styles.text}>
        Durante el desarrollo de esta aplicación, se enfrentaron varios desafíos, incluyendo:
        - Implementación de la navegación entre pantallas.
        - Asegurarse de que la interfaz se vea bien en diferentes tamaños de pantalla.
      </Text>

      <Text style={styles.subtitle}>Conclusiones:</Text>
      <Text style={styles.text}>
        Este proyecto me permitió aprender cómo desarrollar una aplicación básica para dispositivos móviles utilizando React Native y Expo. Además, me familiaricé con los conceptos de navegación y diseño responsive.
      </Text>

      <View style={styles.separator} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',  // Fondo claro
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',  // Título oscuro
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',  // Subtítulos oscuros
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    lineHeight: 22,
    color: '#555',  // Texto con color más suave
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
    backgroundColor: '#ddd',  // Separador gris
  },
});
