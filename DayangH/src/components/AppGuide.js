import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    NavigatorIOS,
    View
} from 'react-native';

class AppGuide extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    helloWorld
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    }
})

module.exports = AppGuide;
