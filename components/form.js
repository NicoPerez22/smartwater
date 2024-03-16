import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Pressable,
} from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Form() {
  return (
    <>
      <View style={styles.rowInput}>
        <FontAwesome name="user-circle-o" size={20} color="#340068" />
        <TextInput
          style={styles.input}
          placeholder="Numero de Cliente"
        />
      </View>

      <View style={styles.rowInput}>
        <FontAwesome6 name="bottle-droplet" size={20} color="#340068" />
        <TextInput
          style={styles.input}
          placeholder="Producto"
          multiline
          numberOfLines={4}
        />
      </View>

      <View style={styles.rowInput}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginRight: 140,
          }}
        >
          <FontAwesome6 name="arrow-up-short-wide" size={20} color="#340068" />
          <Text>Cantidad</Text>
        </View>

        <View style={styles.rowPlusMinus}>
          <Pressable style={styles.buttonPlusMinus}>
            <Entypo name="minus" size={18} color="black" />
          </Pressable>

          <Text>01</Text>

          <Pressable style={styles.buttonPlusMinus}>
            <Entypo name="plus" size={18} color="#340068" />
          </Pressable>
        </View>
      </View>

      <View style={styles.rowInput}>
        <FontAwesome6 name="sack-dollar" size={20} color="#340068" />
        <TextInput
          style={styles.input}
          placeholder="Agregar precio"
          multiline
          numberOfLines={4}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({

    input: {
      height: 40,
      borderColor: 'gray',
      borderBottomWidth: 1,
      borderRadius: 5,
      width: 300,
    },

    row: {
      flexDirection: 'column',
      gap: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      marginTop: 60,
    },

    buttonPlusMinus: {
        borderRadius: 0,
        backgroundColor: 'white',
        elevation: 3,
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },

    rowPlusMinus: {
        flexDirection: 'row',
        gap: 10,
        marginleft: 40,
        alignItems: 'center',
        marginVertical: 10,
    },

    rowInput: {
      display: 'flex',
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 15,
    },
  });
