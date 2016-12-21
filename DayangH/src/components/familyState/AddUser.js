import React, { Component } from 'react'
import { NativeAppEventEmitter } from 'react-native'
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
import NativeScan from './NativeScan'
import QRCode from './QRCode'
class AddUserPage extends Component {
    render() {
        console.info('==常量==',CalendarManager.female)
        console.info('==NativeScan==',NativeScan)
        console.info('==MapView==',MapView)
        //console.info('==CalendarManager==',CalendarManager)
        return (
            <View style={styles.container}>
                <MapView pitchEnabled={true} zoomEnabled={false} style={styles.mapViewStyle} />
                <QRCode style={styles.gwc}
                  oncodeChange={(codeString) => {
                    console.info('-------yes----',codeString)
                  }}
                />
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
        marginLeft: 10,
        marginRight: 10,
        height: 200,
        //backgroundColor: 'red'
    }
})

module.exports = AddUserPage;

