import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'





import homeScreen from './Components/screens/homeScreen'
import superCoin from './Components/screens/superCoin';
import video from './Components/screens/video'
import gamezone from './Components/screens/gamezone'
import { colours } from './Constants';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // tabBarStyle: styles(colours.White).tabbar,
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            switch (route.name) {
              case 'Shop':
                return <Entypo size={25} name="shop" color={focused ? colours.Blue : colours.Gray} />
                break;
              case 'SuperCoin':
                return <Feather size={25} name="dollar-sign" color={focused ? colours.Blue : colours.Gray} />
                break;
              case 'Menu':
                return <MaterialCommunityIcons size={35} name="microsoft-xbox-controller-menu" color={focused ? colours.Blue : colours.Gray} />
                break;
              case 'Video':
                return <Entypo size={25} name="video" color={focused ? colours.Blue : colours.Gray} />
                break;
              case 'GameZone':
                return <Entypo size={25} name="game-controller" color={focused ? colours.Blue : colours.Gray} />
                break;
              default:
                return <Entypo size={25} name="shop" />
                break;
            }


          },
          tabBarShowLabel: true,
        })}>
        <Tab.Screen name="Shop" component={homeScreen} />
        <Tab.Screen name="SuperCoin" component={superCoin} />
        <Tab.Screen name="Menu" component={superCoin} options={{ tabBarLabel: '' }} />
        <Tab.Screen name="Video" component={video} />
        <Tab.Screen name="GameZone" component={gamezone} />
      </Tab.Navigator>
    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})
