import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { Stack, useRouter } from 'expo-router';
import { logout } from '../../redux/userSlice';

const ProfileScreen = () => {

          const userData = useSelector((state) => state.user.user);
          const dispatch = useDispatch();
          const router = useRouter();

          const profileData = userData;
          const handleLogout= () =>{
                    dispatch(logout());
                    router.push('/auth/login');
          }

          return (
                    <SafeAreaView style={styles.safeArea}>
                              <Stack.Screen options={{
                                        title:'Profile Information',
                              }} />
                              <ScrollView contentContainerStyle={styles.container}>
                                        <Text style={styles.header}>Profile Information</Text>

                                        <View style={styles.infoContainer}>
                                                  <Text style={styles.label}>Name:</Text>
                                                  <Text style={styles.value}>{profileData.name}</Text>
                                        </View>

                                        <View style={styles.infoContainer}>
                                                  <Text style={styles.label}>Account Number:</Text>
                                                  <Text style={styles.value}>{profileData.accountNumber}</Text>
                                        </View>

                                        <View style={styles.infoContainer}>
                                                  <Text style={styles.label}>Username:</Text>
                                                  <Text style={styles.value}>{profileData.username}</Text>
                                        </View>

                                        <View style={styles.infoContainer}>
                                                  <Text style={styles.label}>Contact Number:</Text>
                                                  <Text style={styles.value}>{profileData.contactNumber}</Text>
                                        </View>

                                        <Text style={styles.header}>Card Information</Text>

                                        <View style={styles.infoContainer}>
                                                  <Text style={styles.label}>Card Number:</Text>
                                                  <Text style={styles.value}>{profileData.cardNumber}</Text>
                                        </View>

                                        <View style={styles.infoContainer}>
                                                  <Text style={styles.label}>Expiry Date:</Text>
                                                  <Text style={styles.value}>{profileData.expiryDate}</Text>
                                        </View>

                                        <View style={styles.infoContainer}>
                                                  <Text style={styles.label}>CVV:</Text>
                                                  <Text style={styles.value}>{profileData.CVV}</Text>
                                        </View>

                                        <View style={styles.infoContainer}>
                                                  <Text style={styles.label}>Name on Card:</Text>
                                                  <Text style={styles.value}>{profileData.nameOnCard}</Text>
                                        </View>

                                        <TouchableOpacity onPress={handleLogout}>
                                                  <Text style={{ color: '#6C86E8', fontSize: 16, fontWeight: 'bold' }}>Log Out</Text>
                                        </TouchableOpacity>

                              </ScrollView>
                    </SafeAreaView>
          );
};

export default ProfileScreen;

const styles = StyleSheet.create({
          safeArea: {
                    flex: 1,
                    backgroundColor: '#f0f0f0',
          },
          container: {
                    padding: 20,
                    alignItems: 'flex-start',
          },
          header: {
                    fontSize: 24,
                    fontWeight: 'bold',
                    marginVertical: 20,
                    textAlign: 'center',
                    alignSelf: 'stretch',
          },
          infoContainer: {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 15,
                    padding: 10,
                    backgroundColor: '#fff',
                    borderRadius: 8,
                    width: '100%',
          },
          label: {
                    fontWeight: 'bold',
                    fontSize: 16,
          },
          value: {
                    fontSize: 16,
                    color: '#333',
          },
});
