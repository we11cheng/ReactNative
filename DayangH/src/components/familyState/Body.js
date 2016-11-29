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
import EditUserPage from './EditUser'

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
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            })
        };
        this.getDataSource = this.getDataSource.bind(this)
    }
    getDataSource(array) {
        console.info('---------------------------getDataSource')
        return this.state.dataSource.cloneWithRows(array);
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
                users: responseData.users,
                dataSource: this.getDataSource(responseData.users)
            })
        })
        .catch((error) => {
            console.info("reciveerror",error);
        });
    }

    render() {
        console.info('===============dataSource',this.state.dataSource)
        console.info('===============dataSource',this.state.users)
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => 
                    <View style={styles.userList}>
                    <UserListCell userName={rowData.name}  
                        gotoEdit={() => {
                            //alert('edit')
                            this.props.navigator.push({
                                component: EditUserPage,
                                title: '个人信息',
                                passProps: {rowData}
                            })
                        }}
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
        //marginBottom: 20
    }
})

const mapStateToProps = (state) => ({
    DayangState: state.LoginReduc
})
const Container = connect(
    mapStateToProps,
)(MyComponent)

module.exports = Container;
