import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Foundation from '@expo/vector-icons/Foundation';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import { useRouter } from 'expo-router';
import { useSelector } from 'react-redux';


const Home = React.memo(() => {
          const router = useRouter();

          const user = useSelector((state) => state.user.user);

          console.log(user.name);

          return (
                    <SafeAreaView style={styles.container}>
                              <View style={styles.curvedContainer}>
                                        <View style={styles.container2}>
                                                  <TouchableOpacity onPress={() => router.push('/profile')}><FontAwesome name="user-circle-o" size={24} color="white" /></TouchableOpacity>
                                                  <TextInput
                                                            placeholder="Search"
                                                            style={styles.textInput}
                                                  />
                                                  <MaterialIcons name="notifications-none" size={24} color="white" />
                                        </View>
                                        <View style={styles.welcomeContainer}>
                                                  <Text style={styles.textWelcome}>Welcome</Text>
                                                  <Text style={styles.textName}>{user.name}</Text>
                                        </View>
                              </View>
                              <View style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <View style={{ padding: 15, backgroundColor: 'white', width: '90%', borderRadius: 10 }}>
                                                  <View style={{
                                                            display: 'flex',
                                                            flexDirection: 'row', // Set direction to row
                                                            justifyContent: 'center', // Adjust space between items
                                                            alignItems: 'center',
                                                            gap: 50 // Center items vertically
                                                  }}>
                                                            <TouchableOpacity style={{ display: 'flex', alignItems: 'center' }} onPress={() => router.push('/qrCode')}>
                                                                      <AntDesign name="scan1" size={30} color="#001871" />
                                                                      <Text style={{ fontSize: 10 }}>ScanPay</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity style={{ display: 'flex', alignItems: 'center' }}>
                                                                      <MaterialCommunityIcons name="bank-transfer" size={34} color="#001871" />
                                                                      <Text style={{ fontSize: 10 }}>Transfer</Text>
                                                            </TouchableOpacity>
                                                            <TouchableOpacity style={{ display: 'flex', alignItems: 'center' }}>
                                                                      <AntDesign name="mobile1" size={30} color="#001871" />
                                                                      <Text style={{ fontSize: 10 }}>Recharge</Text>
                                                            </TouchableOpacity>
                                                  </View>
                                                  <View style={{
                                                            display: 'flex',
                                                            flexDirection: 'row', // Set direction to row
                                                            justifyContent: 'center', // Adjust space between items
                                                            alignItems: 'center',
                                                            gap: 50,
                                                            marginTop: 20 // Center items vertically
                                                  }}>
                                                            <TouchableOpacity style={{ display: 'flex', alignItems: 'center' }} onPress={() => router.push('/setAmount')} >
                                                                      <MaterialCommunityIcons name="set-all" size={30} color="#001871" />
                                                                      <Text style={{ fontSize: 10 }}>Expense Check</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity style={{ display: 'flex', alignItems: 'center' }}>
                                                                      <MaterialIcons name="payments" size={30} color="#001871" />
                                                                      <Text style={{ fontSize: 10 }}>Payments</Text>
                                                            </TouchableOpacity>
                                                            <TouchableOpacity style={{ display: 'flex', alignItems: 'center' }}>
                                                                      <Foundation name="torsos-male-female" size={30} color="#001871" />
                                                                      <Text style={{ fontSize: 10 }}>Support</Text>
                                                            </TouchableOpacity>
                                                  </View>
                                        </View>
                              </View>
                              <View style={{ padding: 10, display: 'flex', alignItems: 'center' }}>
                                        <View style={{ width: '90%', display:'flex', gap:10 }}>
                                                  <Text style={styles.text}>Saved People</Text>
                                                  <View>
                                                            <FlatList
                                                                      data={[
                                                                                { key: 'Darshan' },
                                                                                { key: 'Vaishal' },
                                                                                { key: 'Nidhi' },
                                                                                { key: 'Arprita' },
                                                                                { key: 'Ravi' },
                                                                      ]}
                                                                      renderItem={({ item }) =>

                                                                                <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 }} >
                                                                                          <Text style={{ padding: 20, backgroundColor: '#6C86E8', color: 'white', borderRadius: 100 }}>{item.key[0]}{item.key[1]}</Text>
                                                                                          <Text style={{ text: 'center' }}>{item.key}</Text>
                                                                                </TouchableOpacity>

                                                                      }
                                                                      horizontal={true}
                                                                      contentContainerStyle={{ gap: 10 }}
                                                            />
                                                  </View>
                                        </View>
                              </View>

                              <View style={{ padding: 10, display: 'flex', alignItems: 'center', gap:15}}>
                                        <TouchableOpacity style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-start', width:'90%'
                                        }} onPress={() => router.push('/transaction')} >
                                                  <MaterialIcons name="history-edu" size={34} color="#001871" />
                                                  <Text style={{fontSize:16, paddingLeft:15}}>See Transaction History</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-start', width:'90%'
                                        }}>
                                                  <Ionicons name="gift-outline" size={30} color="#001871" />
                                                  <Text style={{fontSize:16, paddingLeft:15}}>Rewards/Gift Vouchers
                                                  </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-start', width:'90%'
                                        }}>
                                                  <Octicons name="cross-reference" size={28} color="#001871" style={{marginLeft:5}} />
                                                  <Text style={{fontSize:16, paddingLeft:17}}>Refer & Earn</Text>
                                        </TouchableOpacity>
                              </View>

                    </SafeAreaView>
          );
});

export default Home;

const styles = StyleSheet.create({
          container: {
                    flex: 1,
                    gap: 20
          },
          curvedContainer: {
                    backgroundColor: '#6C86E8',
                    paddingBottom: 20, // Rounded corners at the bottom
                    paddingTop: 20, // Space at the top for better alignment
          },
          textInput: {
                    borderWidth: 1, // Correct usage for border width
                    borderColor: 'transparent', // You can adjust this based on your design
                    width: "70%",
                    padding: 8,
                    paddingHorizontal: 15,
                    backgroundColor: 'white',
                    borderRadius: 100,
                    fontFamily: 'Poppins-Regular',
                    marginVertical: 0,
          },
          welcomeContainer: {
                    marginHorizontal: 50,
                    marginTop: 10,
          },
          textWelcome: {
                    fontSize: 15,
                    fontFamily: 'Poppins-Regular',
                    color: 'white',
          },
          textName: {
                    fontSize: 20,
                    fontFamily: 'Poppins-Regular',
                    color: 'white',
          },
          container2: {
                    flexDirection: 'row', // Align items in a row
                    alignItems: 'center', // Center items vertically
                    justifyContent: 'space-around', // Space items evenly
                    padding: 10,
          },
          text: {
                    fontSize: 15,
                    fontFamily: 'Poppins-Regular'
          }
});
