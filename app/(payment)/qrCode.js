import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { useRouter } from 'expo-router';

export default function App() {

          const router = useRouter();

          return (
                    <SafeAreaView style={{ flex: 1,  alignItems: 'center' }}>
                              <Stack.Screen
                                        options={{
                                                  headerShown: true,
                                                  title: 'Scan',
                                        }}
                              />
                              <View style={{ marginTop: '30%', width:'100%', display:'flex', justifyContent:'center', alignItems:'center' }}>
                                        <View style={{ padding: 2, borderWidth: 1, width: '60%', height: '60%' }} />
                              </View>

                              <TouchableOpacity style={{ padding: 10, backgroundColor: '#6C86E8', width: '50%', marginTop:100 }} onPress={() => router.push('/enterAmount')} >
                                        <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>Scan</Text>
                              </TouchableOpacity>
                    </SafeAreaView>
          );
}


