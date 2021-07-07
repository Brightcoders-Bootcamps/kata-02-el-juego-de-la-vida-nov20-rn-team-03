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
  export default class Carta extends Component{
      render(){
        
          return(
               <SafeAreaView>
               <View style={styles.carta}>
                </View>  
                </SafeAreaView>  
          )
      }
  }

const styles = StyleSheet.create({
      
    carta: {
        width:28,
        height:28,
        backgroundColor:'black',
        marginLeft:2
        ,
           }, 

      });