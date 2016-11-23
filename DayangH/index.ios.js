/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import AppGuide from './src/components/AppGuide'
import Swiper from './src/components/AppGuide'
import ReportPage from './src/components/reportPage/ReportPage'
import TabBar from './src/components/TabBar'
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native'

export default class DayangH extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogined: true
        }
    }
    render() {
        if(this.state.isLogined) {
            /*
            return (
                <NavigatorIOS
                    initialRoute={{
                        component: ReportPage,
                        title: 'shouye',
                        //navigationBarHidden: true
                    }}
                    barTintColor='#09a6c1'
                    titleTextColor='white'
                    interactivePopGestureEnabled={true}
                    shadowHidden={true}
                    translucent={false}
                    style={styles.container}
                />
                )
                */
            return (
                <TabBar />
            )
        } else {
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('DayangH', () => DayangH);
