import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import success from '../../assets/success.png';
import { useRouter } from "expo-router";

const Success = () =>{
          const router= useRouter();
          return (
                    <SafeAreaView style={styles.container}>
                              <Stack.Screen options={{
                                        title:'',
                                        headerShown:false
                              }} />
                              <View style={{marginTop:50}}>
                                        <Text style={{fontSize:40, marginTop:40, fontWeight:'bold', fontFamily:'Poppins-Regular'}}>Congratulations!</Text>
                              </View>

                              <View style={{marginTop:50}}>
                                        <Image source={success} style={{width:300, height:300}} />
                              </View>

                              

                              <View style={{marginTop:50}}>
                                        <Text style={{fontSize:20, marginTop:40, fontWeight:'bold', fontFamily:'Poppins-Regular', textAlign:'center'}}>Your payment has been successfully
                                        processed</Text>
                              </View>

                              <View>
                                        <TouchableOpacity style={{backgroundColor:'#6C86E8', padding:10, borderRadius:10, marginTop:40}} onPress={() => router.push('/home')}>
                                                  <Text style={{color:'white', fontSize:20, textAlign:'center'}}>Back To Home</Text>
                                        </TouchableOpacity>
                              </View>

                    </SafeAreaView>
          )
}

export default Success;

const styles = StyleSheet.create({
          container:{
                    margin:10,
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
          }
})