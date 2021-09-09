import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList,Dimensions } from 'react-native';
import axios from 'axios';

const WIDTH = Dimensions.get('screen').width;

export default function App() {

  const url = "http://192.168.1.11:3000";

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [data, setData] = useState([]);

  return (
    <View style={styles.container}>

      <View >

        <TextInput style={styles.nhap} placeholder='Nhập Tên'
          onChangeText={(text) => {
            setName(text);
          }}
          value={name}
        />

        <TextInput style={styles.nhap} placeholder='Nhập Địa Chỉ'
          onChangeText={(text) => {
            setAddress(text);
          }}
          value={address}
        />

        <TextInput style={styles.nhap} placeholder='Nhập Số Điện Thoại'
          onChangeText={(text) => {
            setPhone(text);
          }}
          value={phone}
        />


        <TouchableOpacity 
        onPress={()=>{
          axios.post(url , {
            name : name,
            address : address,
            phone : phone
          })
          .then((result)=>{
            console.log(result.data);
          }).catch((err)=>{
            throw err;
          });
        }}
        >
          <Text style={styles.btn} > Thêm khách Hàng </Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=>{
          axios.get(url)
          .then((result)=>{
            console.log(result.data);
            setData(result.data);
          }).catch((err)=>{
            throw err;
          })
        }}
        >
          <Text style={styles.btn} > Lấy dữ liệu </Text>
        </TouchableOpacity>
      </View>

      <FlatList style={{borderTopWidth : 2 , borderBottomWidth : 2}}
                data={data != null ? data : []}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index})=>(
                  <TouchableOpacity style={styles.item} >
                    <View >
                      <Text > {item.name} </Text>
                    </View>
                  </TouchableOpacity>
                )}
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
    marginTop  : 50,
    marginBottom : 20
  },

  nhap: {
    width: 250,
    padding: 10,
    marginBottom: 20,
    borderWidth: 2
  },

  btn: {
    padding: 10,
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    marginBottom : 20
  },

  item : {
    width : WIDTH,
    padding : 10,
    borderBottomWidth : 2
  },

});
