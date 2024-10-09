import React,{useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { UserData } from '../../constant/User';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/userSlice';

const Login = React.memo(() => {
          const router = useRouter()

          const [username, setUsername] = useState('');
          const [password, setPassword] = useState('');
          const dispatch = useDispatch();

          

          const handleLogin = () =>{
                    if(username === '' || password === ''){
                              alert('Please fill all fields');
                              return;
                    }

                    const user = UserData.find((item) => item.username === username);
                    if(!user){
                              alert('User not found');
                              return;
                    }

                    if(user.password !== password){
                              alert('Password is incorrect');
                              return;
                    }

                    dispatch(login(user));

                    router.push('/home');
          }

          const data = useSelector((state) => state.user);
          console.log(data);



          return (
                    <SafeAreaView style={styles.container}>
                              <Text style={{textAlign:'center', marginTop: '20%', fontSize:25, fontFamily:'Poppins-Bold', color:'#6C86E8'}}>WelCome to AI-Pay</Text>
                              <View style={{width:'100%', padding:20, marginTop:'10%'}}>
                                        <Text style={styles.text}>Login</Text>
                                        <TextInput placeholder='username' value={username} onChangeText={(text) => setUsername(text)} style={{borderWidth:1, borderColor:'black', padding:10, margin:10}}/>
                                        <TextInput placeholder='Password' value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} style={{borderWidth:1, borderColor:'black', padding:10, margin:10}}/>
                                        <TouchableOpacity style={{backgroundColor:'#6C86E8', padding:10, margin:10, borderRadius:10}} onPress={handleLogin}>
                                                  <Text style={{color:'white', textAlign:'center', fontSize:20}}>Login</Text>
                                        </TouchableOpacity>
                              </View>
                              <View>
                                        <Text style={{textAlign:'center', marginTop:10}}>Don't have an account? <Text style={{color:'#6C86E8'}} onPress={() => router.push('/auth/signup')}>Signup</Text></Text>
                              </View>
                    </SafeAreaView>
          )
})

export default Login;

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