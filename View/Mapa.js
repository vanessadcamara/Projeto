import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Button, Image } from 'react-native';
import { Linking } from 'react-native';
import * as Location from 'expo-location';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();


export default function Mapa() {
  let [markerPosition, setMarkerPosition] = React.useState({
    latitude: -3.091587675023218,
    longitude: -60.01725635998857,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });




  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{    // Centraliza o mapa na posição do usuário
          latitude: -3.091587675023218,
          longitude: -60.01725635998857,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={markerPosition}
          title="Vanessa Camara"
          description="Vanessa Camara"
        />
      </MapView>
      <View style={styles.bttn}>
        <Button style={styles.btn} title="UEA" onPress={
          () => {
            setMarkerPosition({
              latitude: -3.091587675023218,
              longitude: -60.01725635998857,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            });
          }
        } />
        <Button style={styles.btn} title="Localização Atual" onPress={
          () => {
            setMarkerPosition(
              {
                latitude: 2,
                longitude: 2,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }

            );
          }
        } />


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profile: {
    width: 100,
    height: 100,
    marginTop: 120,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10
  },
  email: {
    fontSize: 15,
    marginTop: 10,
  },
  bttn: {
    position: 'absolute',
    zindex: 100,
    bottom: 10,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: '#fff',
    width: '70%',
  },
  mapviewer: {
    width: '100%',
    height: '50%',
    marginTop: 20,
  }
  ,
  map: {
    width: '100%',
    height: '100%',
  }


});

