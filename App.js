import React from 'react';
import { StyleSheet, Text, View , TextInput, Button, Alert} from 'react-native';

import Navigator from './routes/HomeStack'
//import Home from './screens/Home'


export default class App extends React.Component {
  render() {
    return <Navigator />;
  } 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
