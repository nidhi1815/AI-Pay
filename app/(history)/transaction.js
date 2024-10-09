import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import FinancePieChart from "../../components/FinancePieChart";
import { Data } from '../../constant/TranscationData';
import { useSelector } from 'react-redux';

const Transaction = React.memo(() => {
          const userData = useSelector((state) => state.user.user);
          const [selectedFilter, setSelectedFilter] = useState('all');
          const [transactions, setTransactions] = useState(Data);


          console.log(userData.data);

          const handleFilterChange = (filter) => {
                    setSelectedFilter(filter);
                    if(filter === 'all'){
                              setTransactions(Data);
                    }else if(filter === 'credit'){
                              setTransactions(Data.filter((item) => item.type === 'credit'));
                    }else if(filter === 'debit'){
                              setTransactions(Data.filter((item) => item.type === 'debit'));
                    }
          };

          return (
                    <SafeAreaView>
                              <Stack.Screen
                                        options={{
                                                  headerShown: true,
                                                  title: 'Transactions',
                                        }}
                              />
                              <ScrollView>
                                        <View>
                                                  <FinancePieChart />
                                        </View>

                                        <View style={{ display: 'flex', alignItems: 'center' }}>
                                                  <View style={styles.filterContainer}>
                                                            <TouchableOpacity onPress={() => handleFilterChange('all')}>
                                                                      <Text style={[styles.text, selectedFilter === 'all' && styles.selectedText]}>All</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => handleFilterChange('credit')}>
                                                                      <Text style={[styles.text, selectedFilter === 'credit' && styles.selectedText]}>Credit</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => handleFilterChange('debit')}>
                                                                      <Text style={[styles.text, selectedFilter === 'debit' && styles.selectedText]}>Debit</Text>
                                                            </TouchableOpacity>
                                                  </View>
                                        </View>

                                        <View style={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                                                  <FlatList
                                                            data={transactions}
                                                            keyExtractor={(item) => item.id}
                                                            renderItem={({ item }) => (
                                                                      <TouchableOpacity style={{ width: '88%', margin: 10, display: 'flex', flexDirection: 'row', backgroundColor: '#D3D3D3', padding: 10, justifyContent: 'space-between', borderRadius: 10 }}>

                                                                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} key={item.transaction_id}>
                                                                                          <Text style={{ padding: 20, backgroundColor: '#6C86E8', color: 'white', borderRadius: 100, width: 60, textAlign: 'center' }}>{item.counterparty[0]}</Text>
                                                                                          <View style={{ marginLeft: 10 }}>
                                                                                                    <Text style={styles.transText}>{item.counterparty}</Text>
                                                                                                    <Text>{item.date}</Text>
                                                                                          </View>
                                                                                </View>

                                                                                <View style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                                                                                          <Text style={styles.transText}>{item.amount}</Text>
                                                                                          <Text>{item.description}</Text>
                                                                                </View>


                                                                      </TouchableOpacity>
                                                            )}
                                                  />
                                        </View>

                              </ScrollView>
                    </SafeAreaView>
          );
});

export default Transaction;

const styles = StyleSheet.create({
          container: {
                    flex: 1,
          },
          filterContainer: {
                    width: '80%',
                    margin: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
          },
          text: {
                    fontSize: 15,
                    color: 'gray',
                    fontFamily: 'Poppins-Regular',
                    margin: 10,
          },
          selectedText: {
                    color: 'black',
                    fontSize: 15,
                    borderBottomWidth: 2,  // Add underline to the selected text
                    borderBottomColor: 'black'
          },
          transText: {
                    fontSize: 15,
                    fontFamily: 'Poppins-Regular'
          }
});
