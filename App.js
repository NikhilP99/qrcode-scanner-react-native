import React, { Component } from 'react';
import {
StyleSheet,
Text,
View,
Dimensions,
Button
} from 'react-native';

import {RNCamera} from 'react-native-camera';

class App extends Component {

state = {
  scanning: true,
  data: null
}

handleBarCodeRead = (e) => {
    this.setState({scanning: false,
    data:e.data});    

}  

scanAgain = () => {
  this.setState({
    data:null,
    scanning: true
  })
}
 
render() {
    if(this.state.scanning) {
    return (
    <View style={styles.container}>
        <Text style={styles.welcome}>
        Barcode Scanner
        </Text>
        <View style={styles.rectangleContainer}>
        <RNCamera style={styles.camera} type={this.state.cameraType} onBarCodeRead={this.handleBarCodeRead}>
            <View style={styles.rectangleContainer}>
            <View style={styles.rectangle}/>
            </View>            
        </RNCamera>
        </View>
        
    </View>
    );
    }
    else{
    return (<View  style={styles.container}>
        <Text style={styles.welcome}>
        Barcode contains the following data
        </Text>      
        <Text style={styles.instructions}>
        {this.state.data}
        </Text>
        <Button title="Scan Again" onPress={this.scanAgain} />     
    </View>);
    }
}
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
},
camera: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').width,
},  
welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
},
instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
},
rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
},

rectangle: {
    height: 250,
    width: 250,
    borderWidth: 2,
    borderColor: '#00FF00',
    backgroundColor: 'transparent',
},  
});


export default App;