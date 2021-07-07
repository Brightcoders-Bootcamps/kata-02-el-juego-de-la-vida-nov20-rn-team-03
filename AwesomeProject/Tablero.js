/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, {Component} from 'react';
import Carta from './Carta';
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
  export default class Tablero extends Component{
    render(){
        valores = []
        for (let x = 0; x < 100; x++){
         valores.push([
          x+1     
         ])
        }

        return(
             <SafeAreaView >
              <View  style={styles.tablero}>
                    {
                    valores.map((carta)=><Carta></Carta>)}
                  
              </View>
              </SafeAreaView>  
        );
                }
            };

const styles = StyleSheet.create({
      
    tablero : {
          display: 'flex',
          flexWrap:'wrap',
          width:700,
          height: 300,
          margin: 'auto',
          marginTop:20,
          marginLeft:9,
          justifyContent: 'space-around'
    },
        });



