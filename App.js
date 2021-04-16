import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import {Header}  from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TextInput} from 'react-native'

export default class App extends React.Component {
    constructor(){
      super();
      this.state={
        text:'',
        displayText:''
      }
    }
  render() {
    return (
      <SafeAreaProvider>
      <View style={styles.container}>
        <Header
         leftComponent={{ icon: 'menu', color: '#fff' }}
         centerComponent={{text:'Monkey Chunky',style:{color:'red'}}}
         rightComponent={{ icon: 'home', color: '#fff' }}
         />
         <TextInput
         style={styles.inputBox}
           onChangeText={(info)=>{
             this.setState({
               text:info
             })
           }}
           value={this.state.text}/>
           <TouchableOpacity style={styles.goButton} onPress={()=>{
             this.setState({
                displayText:this.state.text
             })
           }}>
                  <Text> 
                    Submit
                  </Text>
             </TouchableOpacity>
             <Text style={styles.displayText}>
                {this.state.displayText}
             </Text>

      </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },
});
