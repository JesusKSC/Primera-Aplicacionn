import React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import { Text, View } from "../components/Themed";

export default function TabOneScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Primera Aplicación - with-react-navigation</Text>
      
      {/* Imagen de la aplicación (si la tienes) */}
      <Image
        source={require("../assets/images/app_image.png")} // Cambia esta ruta si tienes una imagen
        style={styles.image}
      />
      
      {/* Explicación de la aplicación */}
      <Text style={styles.subtitle}>Descripcion:</Text>
      <Text style={styles.text}>
        Esta es la primera aplicación hecha en el curso de Sistemas Móviles.
        El objetivo de este laboratorio fue crear una aplicación básica utilizando React Native y Expo.
      </Text>

      <Text style={styles.subtitle}>Objetivos:</Text>
      <Text style={styles.text}>
        - Aprender a configurar un proyecto en React Native con Expo.
        - Implementar navegación entre pantallas utilizando React Navigation.
        - Familiarizarse con el diseño responsive en dispositivos móviles.
      </Text>

      <Text style={styles.subtitle}>Estructura de la Aplicación:</Text>
      <Text style={styles.text}>
        La aplicación consta de dos pantallas principales: "Tab One" y "Tab Two".
        Estas pantallas permiten la navegación básica entre ellas.
      </Text>

      <View style={styles.separator} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',  // Cambia el color de fondo a un gris claro
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',  // Texto de color oscuro para mejor contraste
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',  // Texto en color oscuro para visibilidad
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    lineHeight: 22,
    color: '#555',  // Texto con un color más suave pero aún legible
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
    backgroundColor: '#ddd',  // Un separador con color gris claro
  },
});
