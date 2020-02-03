import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class PlayerHome extends  React.Component {
    render() {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Player Home screen</Text>
            <Button
              title="Go to Details"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                this.props.navigation.navigate('Details', {
                  itemId: 86,
                  otherParam: 'First Details',
                });
              }}
            />
          </View>
        );
      }
}
export default PlayerHome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});