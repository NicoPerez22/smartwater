import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigation from './components/Navigation';
import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';

export default function App() {
  return (
    <>
      <Navigation />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    paddingHorizontal: 20,

    backgroundColor: '#fff',
    alignItems: 'start',
    justifyContent: 'center',
  },

});
