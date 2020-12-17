/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Alert
  } from 'react-native';
  export default class Menu extends Component{
      render(){
          return(
              <SafeAreaView>
                  <View  style={styles.botones}>
                    <Button
                    color='green'
                    title='Start'
                    onPress={()=>Alert.alert('Start')} />
                  </View>
              </SafeAreaView>  
          )
      }
  }

const styles = StyleSheet.create({
      
   botones: {
       display:'flex',
       justifyContent:'center',
       marginTop:40,
       width:250,
       marginLeft:35,
    },

});