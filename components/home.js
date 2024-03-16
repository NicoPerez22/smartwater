import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import Form from './form';
import AddProduct from './addProduct';


export default function Home() {    
  return (
    <>
      <View style={styles.container}>
          <Text style={styles.title}>
            Registrar nueva venta
          </Text>

          <Form />
          <AddProduct />

          <Pressable style={styles.buttonSend}>
            <Text style={styles.textBtn}>
              Vender
            </Text>
          </Pressable>
      </View>
    </>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 30,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      alignItems: 'start',
      justifyContent: 'center',
    },

    title: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#340068',
      marginBottom: 50,
      marginLeft: 10,
    },
    
    buttonSend: {
      borderRadius: 20,
      backgroundColor: '#340068',
      elevation: 3,
      paddingHorizontal: 10,
      marginBottom: 30,
      paddingVertical: 10,
      marginTop: 60,
    },

    textBtn: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    },

  });