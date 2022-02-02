import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { Main } from './navigation/Main';
import AddBlog from './screens/AddBlog';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            // tabBarStyle: { backgroundColor: '#8293EE' },
            tabBarInactiveTintColor: 'black',
            tabBarActiveTintColor: 'green',
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: any;
              let iconSize: any;
              let iconColor: any;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'New Blog') {
                iconName = 'add-circle';
                iconSize = 34;
              } else if (route.name === 'Settings') {
                iconName = 'settings';
              }
              return (
                <Ionicons
                  name={iconName}
                  size={iconSize ?? 24}
                  color={iconColor ?? 'black'}
                />
              );
            },
          })}
        >
          <Tab.Screen
            name="Home"
            component={Main}
            options={{
              tabBarBadge: 3,
            }}
          />
          <Tab.Screen
            name="New Blog"
            component={AddBlog}
            options={{ headerShown: true, headerTitleAlign: 'center' }}
          />
          <Tab.Screen name="Settings" component={Main} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
