import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class Home extends React.Component {
    
    render() {
        const { navigation } = this.props;
        return (
          <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="Operator" onPress={() => navigation.navigate('OpretorHome')}/>
            <Button title="Player" onPress={() => navigation.navigate('PlayerHome')}/>
                                
          </View>
        );
      }
}
export default Home;

const ImageHeader = props => (
    <View style={{ backgroundColor: '#eee' }}>
      <Image
        style={StyleSheet.absoluteFill}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }}
      />
      <Header {...props} style={{ backgroundColor: 'transparent' }}/>
    </View>
  );

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});