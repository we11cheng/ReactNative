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
import AppGuide from './AppGuide'

class AppGuidePage extends Component {
    render () {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: AppGuide,
                    title: '',
                    navigationBarHidden: true
                }}
                barTintColor='#09a6c1'
                titleTextColor='white'
                interactivePopGestureEnabled={true}
                shadowHidden={true}
                translucent={false}
                style={styles.container}
            />
        )
    }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

module.exports = AppGuidePage;
