import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRouter} from 'expo-router';


const Success = () => {
          const router = useRouter();
          return(
                    <SafeAreaView style={styles.container}>
                              <Text style={{textAlign: 'center', marginTop: '20%', fontSize: 25, fontFamily: 'Poppins-Bold', color: '#6C86E8'}}>WelCome to AI-Pay</Text>
                              <View style={{width: '100%', padding: 20, marginTop: '10%'}}>
                                        <Text style={styles.text}>Success</Text>
                                        <Text style={{textAlign: 'center', fontSize: 20, margin: 10}}>You have successfully added your card</Text>
                                        <TouchableOpacity style={{backgroundColor: '#6C86E8', padding: 10, margin: 10, borderRadius: 10}} onPress={() => router.push('/home')}>
                                                  <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>Continue</Text>
                                        </TouchableOpacity>
                              </View>
                    </SafeAreaView>
          )
}

export default Success;

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