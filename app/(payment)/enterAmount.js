import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context';


const EnterAmount = () => {
          const [inputText, setInputText] = useState('');
          const [selectedCategory, setSelectedCategory] = useState('Food & Dining');
          const [selectedSubcategory, setSelectedSubcategory] = useState('Groceries');  // Initialize with a valid subcategory
          const router = useRouter();

          const handleSubmit = () => {
                    alert(`Amount: ${inputText}, Category: ${selectedCategory}, Subcategory: ${selectedSubcategory}`);
                    router.push('/enterPin'); // Go back to the previous screen
          };

          const updateSubcategory = (category) => {
                    let defaultSubcategory = '';
                    switch (category) {
                              case 'Food & Dining':
                                        defaultSubcategory = 'Groceries';
                                        break;
                              case 'Housing & Utilities':
                                        defaultSubcategory = 'Rent/Mortgage';
                                        break;
                              case 'Health & Wellness':
                                        defaultSubcategory = 'Medical Expenses';
                                        break;
                              case 'Transportation':
                                        defaultSubcategory = 'Daily Commute';
                                        break;
                              default:
                                        defaultSubcategory = '';
                    }
                    setSelectedSubcategory(defaultSubcategory);
          };

          return (
                    <SafeAreaView>

                              <Stack.Screen 
                                        options={{
                                                  title:'Enter Amount'
                                        }}
                              />
                              
                              <View style={styles.container}>
                                        <Text style={styles.title}>Enter Amount</Text>

                                        {/* Input for amount */}
                                        <TextInput
                                                  style={styles.input}
                                                  placeholder="Type amount here..."
                                                  value={inputText}
                                                  onChangeText={setInputText}
                                                  keyboardType="numeric" // Makes the keyboard numeric for amounts
                                        />

                                        {/* Category Picker */}
                                        <Text style={styles.label}>Select Category</Text>
                                        <Picker
                                                  selectedValue={selectedCategory}
                                                  style={styles.picker}
                                                  onValueChange={(itemValue) => {
                                                            setSelectedCategory(itemValue);
                                                            updateSubcategory(itemValue); // Update the subcategory when category changes
                                                  }}
                                        >
                                                  <Picker.Item label="Food & Dining" value="Food & Dining" />
                                                  <Picker.Item label="Housing & Utilities" value="Housing & Utilities" />
                                                  <Picker.Item label="Health & Wellness" value="Health & Wellness" />
                                                  <Picker.Item label="Transportation" value="Transportation" />
                                        </Picker>

                                        {/* Subcategory Picker */}
                                        <Text style={styles.label}>Select Subcategory</Text>
                                        <Picker
                                                  selectedValue={selectedSubcategory}
                                                  style={styles.picker}
                                                  onValueChange={(itemValue) => setSelectedSubcategory(itemValue)}
                                        >


                                                  <Picker.Item label="Groceries" value="Groceries" />
                                                  <Picker.Item label="Restaurants" value="Restaurants" />
                                                  <Picker.Item label="Takeout & Delivery" value="Takeout & Delivery" />


                                                  <Picker.Item label="Rent/Mortgage" value="Rent/Mortgage" />
                                                  <Picker.Item label="Utilities" value="Utilities" />
                                                  <Picker.Item label="Home Maintenance" value="Home Maintenance" />

                                                  <Picker.Item label="Medical Expenses" value="Medical Expenses" />
                                                  <Picker.Item label="Fitness & Gym" value="Fitness & Gym" />
                                                  <Picker.Item label="Personal Care" value="Personal Care" />

                                                  <Picker.Item label="Daily Commute" value="Daily Commute" />
                                                  <Picker.Item label="Vehicle Expenses" value="Vehicle Expenses" />
                                                  <Picker.Item label="Travel & Vacations" value="Travel & Vacations" />

                                        </Picker>

                                        {/* Submit Button */}
                                        <Button title="Submit" onPress={handleSubmit} />
                              </View>
                    </SafeAreaView>
          );
};

export default EnterAmount;

const styles = StyleSheet.create({
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
          input: {
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    paddingHorizontal: 10,
                    marginBottom: 20,
                    width: '80%',
          },
          label: {
                    fontSize: 16,
                    marginVertical: 10,
          },
          picker: {
                    height: 50,
                    width: '80%',
                    marginBottom: 20,
                    backgroundColor: 'white'
          },
});
