import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
//add1
import React, {useState} from 'react';
//add2
const App= () => {
  
  return (
    // flextDirection: "row" 하면 기존 빨,오,녹이 상>하였는데 좌>우로 됨 float처럼 둥둥 띄움
    <View style={styles.container}>
      <View style={styles.cityCon}>
        <Text style={styles.city}>Ansan</Text>
      </View>
      <View style={styles.weatherCon}>
        <View style={styles.day}>
          <Text style={styles.regDate}>10월 13일, 일, 13:18</Text>
          <Text style={styles.desc}>맑음</Text>
        </View>
        <View style={styles.tempCon}>
          <Text style={styles.temp}>24</Text>
        </View>
      </View>
      <Statusbar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  //==
  container: {
    flex: 1,
    backgroundColor: "#ffe01a",
  },
  cityCon: {
    flex: 1,
  },
  city: {
    flex: 1,
    marginTop: 50,
    paddingTop: 20,
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
  weatherCon: {
    flex: 3,
  },
  day: {
    flex: 0.2,
    backgroundColor: "green",
    textAlign: "center",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  regDate: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
    borderRadius: 20,
    overflow: "hidden",
  },
  desc: {
    flex: 1.5,
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  tempCon: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    fontSize: 120,
  }
});

export default App;