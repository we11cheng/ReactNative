/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import AppGuide from './src/components/AppGuide'
import Swiper from './src/components/Swiper'
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native'

export default class DayangH extends Component {
    render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Swiper,
          title: '',
          navigationBarHidden: true
        }}
        style={{flex: 1}}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});

AppRegistry.registerComponent('DayangH', () => DayangH);
