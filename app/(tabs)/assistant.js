import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Speech from 'expo-speech';
import { useRouter } from 'expo-router';

const Assistant = () => {

          const [text, setText] = useState('');
          const router = useRouter();


          const speak = () => {
                    const text = 'Redirecting to Payment Page';
                    Speech.speak(text);
          };

          const handleSpeak = () =>{
                    setTimeout(() =>{
                              setText('Transfer 500Rs to Vishal for Food');
                    },3000)
                    setTimeout(() =>{
                         speak();   
                    },4000)
                    setTimeout(() =>{
                              router.push('/enterPin');
                    },6000)
                    setTimeout(() =>{
                              setText('')
                    }, 7000)
          }

          




          return (
                    <SafeAreaView>
                              <View style={{ marginVertical: 30 }}>
                                        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>Assistant</Text>
                              </View>

                              <Text style={{ textAlign: 'center', marginTop:200, fontSize:20 }}>{text}</Text>
                              <View style={{marginTop:'60%'}}>
                                        

                                        <View style={{ marginTop: '10%' }}>
                                                  <View style={{ margin: 10, display: 'flex', gap: 20 }}>
                                                            <Text style={{ fontSize: 20 }}>Press the button to Speak:</Text>
                                                            <Button title="Speak" onPress={handleSpeak} />
                                                  </View>
                                        </View>
                              </View>
                    </SafeAreaView>
          )
}

export default Assistant;


const styles = StyleSheet.create({
          container: {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 16,
          },
          title: {
                    fontSize: 24,
                    fontWeight: 'bold',
                    marginBottom: 20,
          },
          text: {
                    marginTop: 20,
                    fontSize: 18,
                    textAlign: 'center',
          },
});