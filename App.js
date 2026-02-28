import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
//add1
import React, {useState} from 'react';
//add2
export default function App() {
  
  return (
    // flextDirection: "row" 하면 기존 빨,오,녹이 상>하였는데 좌>우로 됨 float처럼 둥둥 띄움
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "red" }}></View>
      <View style={{ flex: 2, backgroundColor: "darkorange" }}></View>
      <View style={{ flex: 2.5, backgroundColor: "green" }}></View>
      <Statusbar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({});
