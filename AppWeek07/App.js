import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/homescreen.js';
import ShopNearMe from './screens/shopnearme.js';
import DrinkScreen from './screens/drinkscreen.js';
import YourOrders from './screens/yourorders.js';
import PayNow from './screens/paynow.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name="ShopNearMe" component={ShopNearMe} options={({ navigation }) => ({
          headerTitle: 'Shop Near Me',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ width: "15%", paddingLeft: 10 }}>
              <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerRight: () => <Ionicons name="search" size={24} color="green" style={{ width: "10%" }} />,
          
        })} /> */}
        <Stack.Screen name="ShopNearMe" component={ShopNearMe} options={{ headerShown: false }} />
        <Stack.Screen name="DrinkScreen" component={DrinkScreen} options={{ headerShown: false }} />
        <Stack.Screen name="YourOrders" component={YourOrders} options={{ headerShown: false }} />
        <Stack.Screen name="PayNow" component={PayNow} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
