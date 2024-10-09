import React from 'react';
import { Text, View } from 'react-native'; // Correct import
import { PieChart } from 'react-native-chart-kit'; // Correct import
import { Dimensions } from 'react-native'; // To get screen width dynamically

const screenWidth = Dimensions.get('window').width;

const data = [
  { name: 'Food', amount: 72.49, color: '#FF6384', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Groceries', amount: 196.55, color: '#36A2EB', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Utilities', amount: 70.00, color: '#FFCE56', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Subscriptions', amount: 25.98, color: '#4BC0C0', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Transportation', amount: 68.75, color: '#9966FF', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Other Expenses', amount: 165.00, color: '#FF9F40', legendFontColor: '#7F7F7F', legendFontSize: 15 },
];

const FinancePieChart = () => {
  return (
    <View style={{ alignItems: 'center'}}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Transaction Breakdown</Text>
      <PieChart
        data={data}
        width={300} 
        height={220} 
        chartConfig={{
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        accessor="amount"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  );
};

export default FinancePieChart;
