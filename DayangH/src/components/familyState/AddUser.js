import React, { Component } from 'react'
import { NativeModules } from 'react-native'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    NavigatorIOS,
} from 'react-native'

var CalendarManager = NativeModules.CalendarManager

class AddUserPage extends Component {
    render() {
        CalendarManager.addEvent('guanweicheng','19920920')
        //console.info('==CalendarManager==',CalendarManager)
        return (
            <View style={styles.container}>
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
})

module.exports = AddUserPage;

