import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native'
import YCBgimgView from '../native/YCBgimgView'

var deviceHeight = Dimensions.get('window').height
var deviceWidth = Dimensions.get('window').width

class RegistPage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
          <View style={styles.container}>
              <YCBgimgView style={styles.bgimg}>
              </YCBgimgView>
                <View style={styles.testView}>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    bgimg: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width:deviceWidth,
        height:deviceHeight
    },
    testView: {
      width: 200,
      height: 100,
      backgroundColor: 'red'
    }
}) 

module.exports = RegistPage;
