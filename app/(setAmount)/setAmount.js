import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import RNPickerSelect from 'react-native-picker-select';
import { FlatList } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { addAmount } from '../../redux/amountSlice';


const setAmount = React.memo(() => {
          const [selectedFilter, setSelectedFilter] = useState('add-amount');
          const [newCategory, setNewCategory] = useState(null);
          const [newAmount, setNewAmount] = useState('');
          const dispatch = useDispatch();
          const data = useSelector((state) => state.amount.data);

          

          const handleAddAmount = () =>{
                    if(!newCategory || !newAmount){
                              alert('Please fill all fields');
                              return;
                    }
                    dispatch(addAmount({category: newCategory, amount: newAmount}));
                    setNewAmount('');
                    setNewCategory(null);
          }
          

          return (
                    <GestureHandlerRootView style={{ flex: 1 }}>
                      <SafeAreaView>
                        <Stack.Screen
                          options={{
                            title: 'Set Amount',
                            headerShown: true,
                            headerStyle: {
                              backgroundColor: '#6C86E8',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                              fontWeight: 'bold',
                            },
                          }}
                        />
                        <View style={{ marginHorizontal: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 50, margin: 0 }}>
                          <TouchableOpacity onPress={() => setSelectedFilter('add-amount')}>
                            <Text style={[styles.text, selectedFilter === 'add-amount' && styles.selectedText]}>Add Amount</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => setSelectedFilter('show-amount')}>
                            <Text style={[styles.text, selectedFilter === 'show-amount' && styles.selectedText]}>Show Amount</Text>
                          </TouchableOpacity>
                        </View>
                  
                        {selectedFilter === "add-amount" ? (
                          <View style={styles.setAmountContainer}>
                            <RNPickerSelect
                              onValueChange={(value) => setNewCategory(value)}
                              items={[
                                { label: 'Food', value: 'food' },
                                { label: 'Transport', value: 'transport' },
                                { label: 'Shopping', value: 'shopping' },
                                { label: 'Entertainment', value: 'entertainment' },
                                { label: 'Bills', value: 'bills' },
                              ]}
                              placeholder={{ label: "Select a category", value: null }}
                              style={pickerSelectStyles}
                            />
                            <TextInput
                              style={styles.input}
                              placeholder="Enter amount"
                              placeholderTextColor="#666"
                              keyboardType="numeric"
                              value={newAmount}
                              onChangeText={(text) => setNewAmount(text)}
                            />
                            <TouchableOpacity style={styles.button} onPress={handleAddAmount}>
                              <Text style={styles.buttonText}>Set Amount</Text>
                            </TouchableOpacity>
                          </View>
                        ) : (
                          <View style={{ margin: 10 }}>
                            <FlatList
                              data={data}
                              renderItem={({ item }) => (
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 10, backgroundColor:'#D3D3D3', padding:10, borderRadius:10 }}>
                                  <Text style={{fontSize: 20}}>{item.category}</Text>
                                  <Text style={{fontSize: 20}}>{item.amount}</Text>
                                </View>
                              )}
                            />
                          </View>
                        )}
                      </SafeAreaView>
                    </GestureHandlerRootView>
                  );
                  
});

export default setAmount;

const styles = StyleSheet.create({
          text: {
                    fontSize: 15,
                    color: 'gray',
                    fontFamily: 'Poppins-Regular',
                    margin: 10,
          },
          selectedText: {
                    color: 'black',
                    fontSize: 15,
                    borderBottomWidth: 2,
          },
          setAmountContainer: {
                    justifyContent: 'space-between',
                    margin: 10
          },
          input: {
                    backgroundColor: '#D3D3D3',
                    padding: 10,
                    marginVertical: 10,
                    borderRadius: 5,
          },
          button: {
                    backgroundColor: '#6C86E8',
                    padding: 15,
                    borderRadius: 5,
          },
          buttonText: {
                    color: '#fff',
                    textAlign: 'center',
                    fontSize: 20
          },
          inputIOS: {
                    height: 40,
                    paddingHorizontal: 10,
                    borderWidth: 1,
                    borderColor: '#333',
                    borderRadius: 5,
                    backgroundColor: '#fff',
                    color: '#333',
                    marginVertical: 8,
          },
          inputAndroid: {
                    height: 40,
                    paddingHorizontal: 10,
                    borderWidth: 1,
                    borderColor: '#333',
                    borderRadius: 5,
                    backgroundColor: '#fff',
                    color: '#333',
                    marginVertical: 8,
          },
})

const pickerSelectStyles = StyleSheet.create({
          inputIOS: {
                    height: 40,
                    paddingHorizontal: 10,
                    borderWidth: 1,
                    borderColor: '#333',
                    borderRadius: 5,
                    backgroundColor: '#fff',
                    color: '#333',
                    marginVertical: 8,
          },
          inputAndroid: {
                    height: 40,
                    paddingHorizontal: 10,
                    borderWidth: 1,
                    borderColor: '#333',
                    borderRadius: 5,
                    backgroundColor: '#fff',
                    color: '#333',
                    marginVertical: 8,
          },
});
