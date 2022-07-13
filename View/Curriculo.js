import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, Button, Image } from 'react-native';
import { Linking } from 'react-native';

export default function Curriculo() {
  return (    
    <View style={styles.container}>
      <Image
        source={require('../assets/icon.png')}
        style={styles.profile}
      />
      <Text style={styles.name}>Nome de Usuário</Text>
      <Text style={styles.email}>Email: emaildeusuario@gmail.com</Text>
      <Text>Telefone: (11) 99999-9999</Text>
      <View style={{
        marginTop: 20,
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-around',

      }}>
        
        <Button style={styles.btn} title="E-mail" onPress={() => {
          Linking.openURL('mailto:vanessadcamara@gmail.com?subject=Assunto&body=Hello%20World!');
        }} />
        <Button style={styles.btn} title="Whatsapp" onPress={() =>{
          Linking.openURL('whatsapp://send?phone=5511999999999&text=Hello%20World');
        }} />
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
  profile:{
    width: 100,
    height: 100,
    marginTop:120,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10
  } ,
  email: {
    fontSize: 15,
    marginTop: 10,
  },
  btn:{
    marginTop: 10,
    backgroundColor: '#db4a39',
  },

});

