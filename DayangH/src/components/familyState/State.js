import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

class StatePage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
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
    }
}) 

module.exports = StatePage;
