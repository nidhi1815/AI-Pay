import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';



const TabLayout = () =>{
          return (
          <Tabs screenOptions={{
          tabBarStyle: styles.bottomNav,
          tabBarLabelStyle: { fontSize: 12, color: 'white', fontFamily: 'Poppins-Regular' }, 
          tabBarIconStyle: { marginBottom: 5 },
          }} >
          <Tabs.Screen
          name="home"
          options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home-outline" color={color} size={size} />
                    ),
          }}
          />
          <Tabs.Screen
          name="assistant"
          options={{
                    headerShown: false,
                    tabBarLabel: 'Voice',
                    tabBarIcon: ({ color, size }) => (
                    <Ionicons name="mic-outline" color={color} size={size} />
                    ),
          }}
          />
          <Tabs.Screen
          name="investAi"
          options={{
                    headerShown: false,
                    tabBarLabel: 'Invest AI',
                    tabBarIcon: ({ color, size }) => (
                    <Ionicons name="analytics-outline" color={color} size={size} />
                    ),
          }}
          />
          </Tabs>
          );
}

export default TabLayout;

const styles = {
          bottomNav: {
            backgroundColor: '#001871',
            height: 70,
            position: 'absolute', 
            bottom: 0, 
            width: '100%',
            paddingBottom: 10,
            paddingTop:9, 
            fontFamily: 'Poppins-Regular'
          }
};
