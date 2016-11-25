import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    NavigatorIOS,
} from 'react-native'
import {LoginOut} from '../actions/LoginAction'
import Body from './Body'
import AddUserPage from './AddUser'

class StatePage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <NavigatorIOS  
                ref='nav'
                barTintColor='#09a6c1'
                titleTextColor='white'
                style={styles.container}
                rightButtonIcon={require('../../resources/addUser@2x.png')}
                initialRoute={{
                    component: Body,
                    title: '亲人状态',
                }}
                onRightButtonPress={() => {
                    this.refs.nav.push({
                        component: AddUserPage,
                        title: '创建'
                    });
                }}
            />
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
    text: {
        marginTop: 64,
        color: 'red'
    }
}) 

const mapStateToProps = (state) => ({
    DayangState: state.LoginReduc
})
const Container = connect(
    mapStateToProps,
)(StatePage)

module.exports = Container;

