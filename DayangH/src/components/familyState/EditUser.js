import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    NavigatorIOS,
} from 'react-native'

class EditUserPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.desc}>
                    {this.props.rowData.name}
                </Text>
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
    desc: {
        marginTop: 64,
        color: 'red'
    }
})

module.exports = EditUserPage;


