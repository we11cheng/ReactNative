'use strict'

import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Button,
    ActivityIndicatorIOS,
    ActivityIndicator,
} from 'react-native'

class Indicator extends Component {
    constructor(props) {
        super(props)
    }
  render () {
    var display_object = ''
    if (this.props.needPull) {
      display_object = (
          <Image source={require('../../resources/arrow@2x.png')} style={{width: 36, height: 36}}/>
      )
    } else {
      display_object = (
        <ActivityIndicator style={styles.activityIndicator}
          size='large'
          color="#aa3300"
        />
      )
    }
    return (
      <View style={styles.container}>
          {display_object}
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },
  activityIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
})

module.exports = Indicator;
