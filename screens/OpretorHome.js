import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class OpretorHome extends React.Component {
    render() {
        return (
          <View style={ styles.container }>
            <Text>Operator Home screen</Text>           
          </View>
        );
      }
}
export default OpretorHome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});