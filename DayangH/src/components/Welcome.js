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
import Swiper from './AppGuide'

class Welcome extends Component {
    render () {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: Swiper,
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

module.exports = Welcome;
