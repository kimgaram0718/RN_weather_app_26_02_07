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
      {/* add1 */}
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* add2 */}
      {/* add1 */}
      <Text style={{ fontSize: 50 }}>결과 : {number}</Text>
      {/* [증가][감소] 이렇게 float가 됨 */}
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Button title="증가" onPress={() => setNumber(number + 1)} />
        <Button title="감소" onPress={() => setNumber(number - 1)} />
      </View>
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
});
