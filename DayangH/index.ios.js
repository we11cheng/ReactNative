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
import Welcome from './src/components/Welcome'
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import reducer from './src/components/reducers/Rootreduc'
import LoginAction from './src/components/actions/LoginAction'
    
 const store = createStore(reducer)
 alert(JSON.stringify(store))
 alert(reducer)
 

class DayangH extends Component {
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
            /*
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
            */
            return (
                /*
                <Provider store={this.state.store}>
                    <Welcome />
                </Provider>
                */
                <Welcome />
            )
        }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => ({
    DayangState: state
})

const mapDispatchToProps = (dispatch) => ({
    DayangDispath:() => {
        dispatch(LoginAction())
    }
})

/*
 var ContainerDayangH = connect (
     mapStateToProps,
     mapDispatchToProps
 )(DayangH)
 */
AppRegistry.registerComponent('DayangH', () => DayangH);
