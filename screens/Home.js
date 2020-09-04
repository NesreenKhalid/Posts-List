import React from 'react';
import { View , Text, TouchableOpacity } from 'react-native'; 



export default function Home({navigation}) {
  return (
      <View style={{flex:1 , alignItems: 'center', justifyContent: 'center' }}>
          
          <TouchableOpacity
          onPress={() => { navigation.navigate('posts') }}
          style={styles.button}
          >
            <Text style={{fontSize: 30}}> Get Posts </Text>
          </TouchableOpacity>

      </View>
  )
}

const styles = {
  button: {
    // marginTop: 10,
    padding: 15,
    // paddingBottom: 15,
    // marginLeft: 30,
    // marginRight: 30,
    backgroundColor: 'pink',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    width: 180,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  }
}

