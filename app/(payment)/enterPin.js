import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const EnterPin = () => {
  const [pin, setPin] = useState('');
  const router = useRouter();
  const [active, setActive] = useState(false);

  const handleKeyPress = (value) => {
    if (pin.length < 4) {
      setPin(pin + value);
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  const handleSubmit = () => {
    if (pin.length === 4) {
      setActive(true);
      setTimeout(() => {
        setActive(false);
        router.push('/done');
      }, 2000);
    }
  };

  return (
    <SafeAreaView style={{display:'flex', alignItems:'center'}}>
      <Stack.Screen options={{ title: 'Enter Pin' }} />
      <ScrollView>
      {active ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <View style={{display:'flex', alignItems:'center', marginTop:'30%'}} >
          <Text style={{fontSize:20, marginBottom:10}} >Enter your UPI PIN</Text>
          <View style={{display:'flex', flexDirection:'row'}} >
            {[0, 1, 2, 3].map((_, index) => (
              <View key={index} style={styles.pinBox}>
                <Text style={styles.pinText}>{pin[index] || ''}</Text>
              </View>
            ))}
          </View>

          <View style={styles.keypad} >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'DEL', 0, 'SUBMIT'].map((key, index) => (
              <TouchableOpacity
                key={index}
                style={styles.key}
                onPress={() => {
                  if (key === 'DEL') handleDelete();
                  else if (key === 'SUBMIT') handleSubmit();
                  else handleKeyPress(key.toString());
                }}
              >
                <Text>{key}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
          </ScrollView>
    </SafeAreaView>
  );
};

export default EnterPin;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '60%',
  },
  pinBox: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  keypad: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop:'40%'
  },
  key: {
    width: '30%',
    padding: 15,
    margin: 5,
    backgroundColor: '#6C86E8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  keyText: {
    fontSize: 18,
    color: '#fff',
  },
});
