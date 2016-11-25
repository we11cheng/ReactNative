import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    NavigatorIOS,
    Image,
} from 'react-native'

class Body extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Image style={styles.image}
                    source={require('../../resources/addUser@2x.png')}
                />
                <Text style={styles.text}>
                    hhhhhhhhhhh
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
        backgroundColor: 'gray'
    },
    image: {
        marginTop: 64,
    },
    text: {
        color: 'red'
    }
})

module.exports = Body;
