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
    ListView,
} from 'react-native'
import UserListCell from './UserListCell'

class Body extends Component {
    constructor(props) {
        super(props)
            /*
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            users: [],
            dataSource: ds.cloneWithRows(this.getDataSource())
        }
        this.getDataSource = this.getDataSource.bind(this)
        */
    }
    getDataSource() {
        const userArray = this.state.users
        const empty = []
        var dataSource = userArray.map(function(value){
            empty.push('aa'+i)
        })
        return empty
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
                users: responseData.users
            })
        })
        .catch((error) => {
            console.info("reciveerror",error);
        });
    }
    render() {
        /*
        let userArray = this.state.dataSource
        var result = userArray.map(function(value){
            return <UserListCell key={value.id} userName={value.name} />
        })
        */
        //console.info('==dataSource========',this.state.dataSource)
        return(
            <View style={styles.container}>
            </View>
        )
    }
}

class MyComponent extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            users:[],
            dataSource: ds.cloneWithRows(['row 1', 'row 2','row3','row4']),
        };
    }
    getDataSource() {
        const userArray = this.state.users
        const empty = []
        var dataSource = userArray.map(function(value){
            empty.push()
        })
        return empty
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
                users: responseData.users
            })
        })
        .catch((error) => {
            console.info("reciveerror",error);
        });
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => 
                    <View style={styles.userList}>
                    <UserListCell userName={rowData} 
                    />
                    </View>
                    }
            />
        );
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
        marginBottom: 20
    }
})

const mapStateToProps = (state) => ({
    DayangState: state.LoginReduc
})
const Container = connect(
    mapStateToProps,
)(MyComponent)

module.exports = Container;
