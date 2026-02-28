import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
//add1
import React, {useState} from 'react';
//add2
export default function App() {
  //add1
  const [number, setNumber] = useState(0);
  //add2
  return (
    <View style={styles.container}>
      <Text style={styles.text}>결과 : {number}</Text>
      <View style={styles.btnGroup}>
        <Button 
          style={styles.btn} 
          title="증가" 
          onPress={() => setNumber(number + 1)}/>
        <Button 
          style={styles.btn} 
          title="감소" 
          onPress={() => setNumber(number - 1)}/>
      </View>
      <Statusbar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
  },
  btnGroup: {
    flexDirection: "row",
    gap: 10,
  },
});
