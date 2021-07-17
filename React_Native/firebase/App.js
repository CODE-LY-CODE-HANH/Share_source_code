import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, 
  FlatList, ScrollView, Dimensions, Alert } from 'react-native';
import firebase from 'firebase/app'

// Optionally import the services that you want to use
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

const WIDTH = Dimensions.get("window").width

export default function App() {

  const [id, setId] = useState(null)
  const [name, setName] = useState(null)
  const [address, setAddress] = useState(null)
  const [data, setData] = useState([])

  useEffect(() => {
    var firebaseConfig = {
      apiKey: "AIzaSyDXke_fKgzz7W32BV-kAhDViCa7Qd5d9U4",
      authDomain: "bai8-b0536.firebaseapp.com",
      databaseURL: "https://bai8-b0536-default-rtdb.firebaseio.com",
      projectId: "bai8-b0536",
      storageBucket: "bai8-b0536.appspot.com",
      messagingSenderId: "505864449793",
      appId: "1:505864449793:web:5f10ef73634ab690ec3500",
      measurementId: "G-12FKPPVTBQ"
    };

    if (!firebase.apps.length) {
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      console.log("\nKết nối firebase thành công\n")
    }
    get_DATA()

  }, [])

  function addDataBase(id, name, address) {
    firebase.database().ref('users/' ).push().set({

      Name: name,
      address: address
    }, function (error) {
      if (error) {
        // The write failed...
        alert('Lỗi')
      } else {
        // Data saved successfully!
        alert('Thành Công !!!')
      }
    });

  }

  function updateDataBase(id, name, address) {
    firebase.database().ref('users/' + id).set({

      Name: name,
      address: address
    }, function (error) {
      if (error) {
        // The write failed...
        alert('Lỗi')
      } else {
        // Data saved successfully!
        alert('Thành Công !!!')
      }
    });

  }

  function deleteDataBase(id) {
    firebase.database().ref('users/' + id).remove()
    alert("Xóa thành công !!!")
  }

  const get_DATA = () => {
    firebase.database().ref('users/').on('value', function (snapshot) {

      let array = [];
      snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val();
        array.push({
          id: childSnapshot.key,
          name: childData.Name,
          address: childData.address,

        });
      });
      // console.log(array)
      setData(array)

    });
  }

  const createThreeButtonAlert = (item) =>
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Xóa",
        onPress: () =>{
          console.log("Ask me later pressed")
          deleteDataBase(item.id)
        }
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "Sửa", onPress: () =>{
        console.log("OK Pressed")
        updateDataBase(item.id , name , address)
      } }
    ],
    { cancelable: false }
  );

  return (
    <View style={styles.container}>

      <ScrollView style={{width : WIDTH , marginTop : 40}} >
        <TextInput style={styles.nhap}
          placeholder='Id' onChangeText={(text) => { setId(text) }} value={id}
        />

        <TextInput style={styles.nhap}
          placeholder='Name' onChangeText={(text) => { setName(text) }} value={name}
        />

        <TextInput style={styles.nhap}
          placeholder='Address' onChangeText={(text) => { setAddress(text) }} value={address}
        />

        <TouchableOpacity onPress={() => {
          addDataBase(id, name, address)
        }} >
          <Text style={styles.btn} > Thêm </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          updateDataBase(id, name, address)
        }} >
          <Text style={styles.btn} > Sửa </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          deleteDataBase(id)
        }} >
          <Text style={styles.btn} > Xóa </Text>
        </TouchableOpacity>
      </ScrollView>

      <FlatList
      data ={data}
      keyExtractor={({item} , index)=>{ index.toString() }}

      renderItem={({item , index})=>
    <View>
      <TouchableOpacity onPress={()=>{
        // deleteDataBase(item.id)
        createThreeButtonAlert(item)
      }} >
      <Text style={{
        borderBottomWidth : 3,
        width : WIDTH,
        padding : 10,
      }} > {item.name} </Text>
      </TouchableOpacity>
    </View>
    }
      />

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

  nhap: {
    width: 300,
    padding: 15,
    marginBottom: 20,
    borderWidth: 3
  },

  btn: {
    backgroundColor: 'aqua',
    padding: 15,
    marginBottom: 10
  },

});