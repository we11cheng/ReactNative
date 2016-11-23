/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import AppGuide from './src/components/AppGuide'
import Swiper from './src/components/AppGuide'
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
        barTintColor='#09a6c1'
        titleTextColor='white'
        interactivePopGestureEnabled={true}
        shadowHidden={true}
        translucent={false}
        style={styles.container}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('DayangH', () => DayangH);
