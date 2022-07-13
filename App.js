import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Curriculo from "./View/Curriculo"
import Mapa from "./View/Mapa"
import CamView from './View/Camera';
import { StyleSheet, Text, View, Dimensions, Button, Image } from 'react-native';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Mapa" component={Mapa} options={
          {
            tabBarLabel: 'Mapa',
            tabBarIcon: ({ color, size }) => (
              <Image source={require('./assets/fixar-mapa.png')} style={{ width: size, height: size }} />
            ),
          }
        } />
        <Tab.Screen name="Curriculo" component={Curriculo} options={
          {

            tabBarLabel: 'Currículo',
            tabBarIcon: ({ color, size }) => (
              <Image source={require('./assets/user.png')} style={{ width: 20, height: 20 }} />)
          }
        }
       
      />
        <Tab.Screen name="Camera" component={CamView}  options={
          {

            tabBarLabel: 'Câmera',
            tabBarIcon: ({ color, size }) => (
              <Image source={require('./assets/photo-camera.png')} style={{ width: 22, height: 22 }} />)
          }
        }/>
      </Tab.Navigator>
    </NavigationContainer>

  );
}
