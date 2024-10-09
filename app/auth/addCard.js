import { Text, View, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import card from '../../assets/citi-bank-card.png';


const AddCard = () => {
          const router = useRouter();
          return (
                    <SafeAreaView>
                              <ScrollView>
                                        <View style={{ padding: 20 }}>
                                                  <Text style={{ textAlign: 'center', fontSize: 25, fontFamily: 'Poppins-Bold', color: '#6C86E8' }}>Add Your Card Details</Text>
                                                  <Image source={card} style={{ width: '100%', height: 200, borderRadius: 10 }} />
                                                  <View style={{ margin: 10, marginTop: 20 }}>
                                                            <Text>CARD NUMBER</Text>
                                                            <TextInput placeholder='Card Number' style={{ borderWidth: 1, borderColor: 'black', padding: 10, marginTop: 10 }} />
                                                  </View>
                                                  <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                            <View style={{ margin: 10, marginTop: 20, width: '30%' }}>
                                                                      <Text>EXPIRY DATE</Text>
                                                                      <TextInput placeholder='MM/YY' style={{ borderWidth: 1, borderColor: 'black', padding: 10, marginTop: 10 }} />
                                                            </View>
                                                            <View style={{ margin: 10, marginTop: 20, width: '30%' }}>
                                                                      <Text>CVV</Text>
                                                                      <TextInput placeholder='CVV' style={{ borderWidth: 1, borderColor: 'black', padding: 10, marginTop: 10 }} />
                                                            </View>
                                                  </View>
                                                  <View style={{ margin: 10, marginTop: 20 }}>
                                                            <Text>Name on Card</Text>
                                                            <TextInput placeholder='e.g Nidhi Kumari' style={{ borderWidth: 1, borderColor: 'black', padding: 10, marginTop: 10 }} />
                                                  </View>
                                                  <TouchableOpacity style={{ backgroundColor: '#6C86E8', padding: 20, margin: 10, borderRadius: 10 }} onPress={() => router.push('/auth/success')}>
                                                            <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>Add Card</Text>
                                                  </TouchableOpacity>
                                        </View>
                              </ScrollView>
                    </SafeAreaView>
          )
}

export default AddCard;