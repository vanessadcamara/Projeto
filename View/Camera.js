import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList, Alert, Button } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function CamView() {
  //create state variable to store value of the barcode
  const [hasPermission, setHasPermission] = useState(null);
  // verifica mudança de valor
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Aponte a câmera para o código');
  const [arrayScanned, setArrayScanned] = useState([]);




  const askPermission = () => {
    (async () => {
      // esperando a permissão da camera
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }
  // observa quando tem uma alteração no que ele tá olhando
  // sempre que tem mudança ele faz algo no código
  useEffect(() => {
    askPermission();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);

    setArrayScanned(arrayScanned => [...arrayScanned, data]);
    console.log(arrayScanned);
  }
  if (hasPermission === null) {
    return (
      <View>
        <Text>Esperando acesso à câmera</Text>
      </View>
    )
  }
  if (hasPermission === false) {
    return (
      <View>
        <Text>Sem acesso à câmera</Text>
        <Button title={'Permite camera'} onPress={() => askPermission()} />
      </View>
    )
  }
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      width: '60%',
      height: '10%',
    },
    button: {
      backgroundColor: '#3243be',
      width: '35%',
      height: '60%',
      borderRadius: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

    },
    buttonText: {
      color: '#fff',
    }
    ,
    maintext: {
      fontSize: 20,
      marginTop: 10,
      marginBottom: 10,
      width: '70%',
      maxWidth: '70%',
      borderRadius: 35,
      textAlign: 'center',

    },
    boxcamera: {
      borderRadius: 30,
      width: 300,
      height: 300,
    }
    ,
    linkitems: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      textAlignVertical: 'center',
      backgroundColor: '#fff',
      height: 35,
      marginTop: 10,
      borderRadius: 15,
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.boxcamera}>
        <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={
          {
            width: '100%',
            height: '100%',
            borderRadius: 40,
          }
        } />
      </View>
      <Text style={styles.maintext} >{text}</Text>
      {scanned && <Button title={'Scanear de novo?'} onPress={() => setScanned(false)} />}
      <View style={{

        width: '60%',
        borderRadius: 80,
        height: '30%',
      }}>
        <FlatList
          data={arrayScanned}
          renderItem={({ item }) => <Text style={styles.linkitems}>{item}</Text>}

        />
      </View>

    </View>

  )
}

