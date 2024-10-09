import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';


const Signup = React.memo(() => {
          const router = useRouter();
          return (
            <SafeAreaView style={styles.container}>
              <Text style={{textAlign: 'center', marginTop: '20%', fontSize: 25, fontFamily: 'Poppins-Bold', color: '#6C86E8'}}>
                WelCome to AI-Pay
              </Text>
              <View style={{width: '100%', padding: 20}}>
                <Text style={styles.text}>Sign Up</Text>
                <TextInput placeholder="Mobile No." style={{borderWidth: 1, borderColor: 'black', padding: 10, margin: 10}} />
                <TextInput placeholder="Email" style={{borderWidth: 1, borderColor: 'black', padding: 10, margin: 10}} />
                <TextInput placeholder="Password" secureTextEntry={true} style={{borderWidth: 1, borderColor: 'black', padding: 10, margin: 10}} />
                <TextInput placeholder="Confirm Password" secureTextEntry={true} style={{borderWidth: 1, borderColor: 'black', padding: 10, margin: 10}} />
                <TouchableOpacity style={{backgroundColor: '#6C86E8', padding: 20, margin: 10, borderRadius: 10}} onPress={() => router.push('/auth/addCard')}>
                  <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>Create Account</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={{textAlign: 'center', marginTop: 10}}>
                  Already have an account?{' '}
                  <Text style={{color: '#6C86E8'}} onPress={() => router.push('/auth/login')}>
                    Login
                  </Text>
                </Text>
              </View>
            </SafeAreaView>
          );
        });
        

export default Signup;

const styles = StyleSheet.create({
          container: {
                    flex: 1,
                    
          },
          text:{
                    fontSize: 25,
                    color: 'black',
                    fontFamily: 'Poppins-Bold',
                    margin: 10
          }
})
