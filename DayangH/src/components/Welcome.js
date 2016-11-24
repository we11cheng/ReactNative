import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Button,
    TabBarIOS,
    NavigatorIOS,
} from 'react-native'
import AppGuidePage from './AppGuidePage'

class Welcome extends Component {
    render () {
        return (
            <AppGuidePage />
        )
    }
}

module.exports = Welcome;
