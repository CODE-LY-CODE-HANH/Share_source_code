import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [data, setData] = useState(null)
  const [text, setText] = useState(null)

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('key_moi', "fjdnsfdmnfmnsbfmnsbfmndbfsmnd")
    } catch (e) {
      // saving error
    }
  }


const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('key_moi')
    if(value !== null) {
      // value previously stored
      console.log(value)
      setData(value)
    }
  } catch(e) {
    // error reading value
  }
}

const storeData_22 = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    console.log(jsonValue)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
    // saving error
  }
}



const getData_22 = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    if(jsonValue != null ){
      console.log(jsonValue)
      setData(jsonValue)
    }
    // return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
  }
}


  return (
    <View style={styles.container}>

      <TextInput placeholder='NHập giá trị'
      style={{
        borderWidth : 3,
        width : 300,
        marginBottom : 20,
        padding : 10,
      }}
      onChangeText={(text)=>{  setText(text) }}
      value={text}
      />

      <TouchableOpacity onPress={()=>{
        storeData_22(text)
        alert("Đã lưu thành công")
      }} >
        <Text style={styles.btn} > Lưu dữ liệu </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{
        getData_22()
      }} >
        <Text style={styles.btn} > Lấy  dữ liệu </Text>
      </TouchableOpacity>

      {data != null ? <Text> {data} </Text> : null}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btn: {
    backgroundColor: 'aqua',
    padding: 15,
    marginBottom: 20,
  },
});
