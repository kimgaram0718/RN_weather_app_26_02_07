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
    <View style={styles.containter}>
      {/* add1 */}
      <Text style={{...styles.text, color: "green"}}>리액트 네이티브</Text>
      <Text style={styles.text}>리액트 네이티브</Text>
      {/* add2 */}
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
  text: {
    fontSize: 50,
    color: "green",
    fontWeight: "bold",
  },
});
