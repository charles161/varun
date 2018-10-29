import React,{Component} from 'react'
import {Text,View,AsyncStorage,TouchableOpacity} from 'react-native'
import entry from '../app/index'

class Profile extends Component{
render(){
    return(
    <View>
    <View>
    <View>        
    <TouchableOpacity style={styles.end} 
       onPress={async () => {
         
          await AsyncStorage.removeItem('data');
          entry();
    }}>
        <Text style={{fontSize:30}}> Log Out </Text>
    </ TouchableOpacity>
</View>
    </View>
    </View>);
}}

export default Profile;