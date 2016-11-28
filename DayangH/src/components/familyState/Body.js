import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    NavigatorIOS,
    Image,
} from 'react-native'
import UserListCell from './UserListCell'

class Body extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    {this.props.DayangState.response.token}
                </Text>
                <UserListCell userName="hhh">
                </UserListCell>
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
    image: {
        marginTop: 64,
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
)(Body)

module.exports = Container;
