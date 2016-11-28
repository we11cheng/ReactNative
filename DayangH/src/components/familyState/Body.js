import React, { Component } from 'react'
import { connect } from 'react-redux'
import {baseUrl} from '../../constants/Api'
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
    constructor(props) {
        super(props)
        this.state = {
            dataSource: []
        }
    }
    componentDidMount() {
        //console.info('==Body==',this.props.DayangState)
        var guardianId = this.props.DayangState.response.guardianId
        var requestUrl = `${baseUrl}guardians/${guardianId}/users`
        //console.info('==requestUrl',requestUrl)
        var tokenStr = `Bear ${this.props.DayangState.response.token}`
        //console.info('==token',tokenStr)
        fetch(requestUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": tokenStr
            },
        })
        .then((response) => response.json())
        .then((responseData) => {
            console.info("==recivedata==",responseData);
            this.setState({
                dataSource: responseData.users
            })
        })
        .catch((error) => {
            console.info("reciveerror",error);
        });
    }
    render() {
        let userArray = this.state.dataSource
        var result = userArray.map(function(value){
            return <UserListCell userName={value.name} />
        })
        return(
            <View style={styles.container}>
                <View style={styles.userList}>
                {result}
                </View>
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
        marginTop: 164,
        color: 'red'
    },
    userList: {
        marginTop: 64
    }
})

const mapStateToProps = (state) => ({
    DayangState: state.LoginReduc
})
const Container = connect(
    mapStateToProps,
)(Body)

module.exports = Container;
