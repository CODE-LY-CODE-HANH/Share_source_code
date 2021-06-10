import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet, Text, View, FlatList, Dimensions, RefreshControl, ActivityIndicator
  , TouchableHighlight
} from 'react-native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [refreshControl, setRefreshControl] = useState(false)

  const mang_du_lieu = [
    { title: 'cam' },
    { title: 'xoai' },
    { title: 'man' },
    { title: 'tao' },
    { title: 'buoi' },
    { title: 'cam' },

  ];
  const [data, setData] = useState(mang_du_lieu)

  return (
    <View style={styles.container}>

      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        horizontal={false}
        renderItem={({ item, index }) =>
          <View style={styles.item} >
            <TouchableHighlight onPress={() => { }} style={{ fontSize: 22 }} underlayColor='aqua' >
              <Text style={styles.item_2} >  {item.title} so        {index} </Text>
            </TouchableHighlight>
          </View>
        }
//        Swipe to Refresh
        refreshControl={
          <RefreshControl refreshing={refreshControl} onRefresh={() => {
            setRefreshControl(true)
            console.log("lam moi")
            // setData(mang_du_lieu)
            setData(data.concat([ { title : "moi a nha"}]))
            setRefreshControl(false)
          }} colors={['green']} />
        }
//       Load More
        ListFooterComponent={() => (
          isLoading ? //  a==b ? b : a
              <View style={{
                  marginTop: 10, 
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  padding: 10,
                  // width : WIDTH,
                  // height : 50 ,
                  flexDirection : 'column'
              }} >
                <Text > Tải Thêm </Text>
                  <ActivityIndicator size="large" color='#0000ff' />
              </View> : null
      )}
      onEndReached={()=>{
        setIsLoading(true)
        console.log("Load More")
        // setData(mang_du_lieu)
        
        setTimeout(() => {
          setData(data.concat([ { title : "moi a nha"} ]))
          setIsLoading(false)
        }, 2000);
      }  }
      onEndReachedThreshold = {0.1}
      // 0853460198 ZALO
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
    marginTop: 40,
    marginBottom: 10,
  },

  item: {
    width: WIDTH,
  },

  item_2: {
    width: WIDTH,
    borderBottomWidth: 3,
    borderColor: 'grey',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 22,
  },
});