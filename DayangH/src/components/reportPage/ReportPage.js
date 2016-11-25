import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from 'react-native'
import {LoginOut} from '../actions/LoginAction'

class HomePage extends Component {
    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    onPress= {() => {
                        this.props.dispatch(LoginOut())
                    }}
                    style={styles.registTouchable}>
                    <Text
                        style={styles.registText}>
                        退出登录
                    </Text>
                </TouchableOpacity>
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
    registTouchable: {
        marginTop: 140,
        alignItems: 'center',
        height: 36,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#09a6c1',
        borderRadius: 3
    },
    registText: {
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 7,
        color: 'white'
    },
})

const mapStateToProps = (state) => ({
    DayangState: state
})
const Container = connect(
    mapStateToProps,
)(HomePage)

module.exports = Container;
