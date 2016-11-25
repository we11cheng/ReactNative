import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native'
import { connect } from 'react-redux'
import TabBar from './TabBar'
import Welcome from './Welcome'

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.info('DayangState========',this.props.DayangState)
        if(this.props.DayangState.isLogined) {
            return (
                <TabBar />
            )
        } else {
            return (
                <Welcome />
            )
        }
    }
}

const mapStateToProps = (state) => ({
    DayangState: state.LoginReduc
})
/*
const mapDispatchToProps = (dispatch) => ({
    DayangDispath:() => {
        dispatch(LoginAction())
    }
})
*/
const Container = connect(
    mapStateToProps,
)(App)

module.exports = Container;
