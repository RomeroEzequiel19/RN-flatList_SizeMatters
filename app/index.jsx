import { Link } from 'expo-router'
import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function indexScreen () {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Inicio de la Aplicación</Text>
      <Link href={"listaTareas"} style={styles.link}>
        <Text style={styles.linkText}>Ir a la lista de Tareas</Text>
      </Link>
      <Link href={"contador"} style={styles.link}>
        <Text style={styles.linkText}>Ir al contador</Text>
      </Link>
      <Link href={"listaAnimales"} style={styles.link}>
        <Text style={styles.linkText}>Ir a la Lista de Animales</Text>
      </Link>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    margin: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#333',
  },
  link: {
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#6200ee',
    borderRadius: 5,
  },
  linkText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
});