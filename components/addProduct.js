import React from "react";
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';


export default function AddProduct() {
  return (
    <View style={styles.row}>
      <Pressable style={styles.button}>
        <Entypo name="plus" size={24} color="#340068" />
      </Pressable>
      <Text style={{ color: "#rgb(221, 221, 221)", marginBottom: 40 }}>
        Agregar otro producto
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({

    row: {
      flexDirection: 'column',
      gap: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      marginTop: 60,
    },

    button: {
      borderRadius: 50,
      backgroundColor: 'white',
      elevation: 3,
      width: 35,
      height: 35,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },

});