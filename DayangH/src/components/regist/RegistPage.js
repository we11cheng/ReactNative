import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

class RegistPage extends Component {
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
        backgroundColor: 'yellow'
    }
}) 

module.exports = RegistPage;
