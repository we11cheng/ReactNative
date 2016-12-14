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
import MapView from './MapView'
import GwcScanView from './GwcScan' 
class AddUserPage extends Component {
    render() {
        CalendarManager.addEvent('guanweicheng','19920920')
        CalendarManager.findEvents((error,event) => {
            if(error) {
                console.info('==error==',error)
            } else {
                console.info('==event==',event)
            }
        })
        console.info('==常量==',CalendarManager.female)
        console.info('==GwcScanView==',GwcScanView)
        console.info('==MapView==',MapView)
        //console.info('==CalendarManager==',CalendarManager)
        return (
            <View style={styles.container}>
                <MapView pitchEnabled={true} zoomEnabled={false} style={styles.mapViewStyle} />
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        //backgroundColor: 'yellow'
    },
    mapViewStyle: {
        marginTop: 100,
        marginLeft: 10,
        marginRight: 10,
        height: 200,
        backgroundColor: 'red'
    },
    gwc: {
        width: 200,
        height: 200,
        backgroundColor: 'red'
    }
})

module.exports = AddUserPage;

