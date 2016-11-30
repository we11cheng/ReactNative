import React, { Component } from 'react'
import { connect } from 'react-redux'
import {baseUrl} from '../../constants/Api'
import PTRView from './RefreshIOS'
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
        this.refresh = this.refresh.bind(this)
    }
    getDataSource(array) {
        console.info('---------------------------getDataSource')
        return this.state.dataSource.cloneWithRows(array);
    }
    refresh() {
        return new Promise((resolve) => {
            setTimeout(()=>{resolve()}, 2000)
            //alert('==refresh==')
        });
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
        })
    }

    render() {
        console.info('===============dataSource',this.state.dataSource)
        console.info('===============dataSource',this.state.users)
            /*
        return (
            <View style={styles.container}>
                <View style={styles.PTRView}>
                    <PTRView  onRefresh={this.refresh}>
                    </PTRView>
                </View>
                    <View style={styles.baseView}>
                        <ListView style={styles.userList}
                            dataSource={this.state.dataSource}
                            renderRow={(rowData) => 
                                <View>
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
                        </View>
                    </View>
        );
        */
        return (
            <PTRView onRefresh={this.refresh} >
                <View style={styles.baseView}>
                    <ListView style={styles.userList}
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => 
                            <View>
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
                    </View>
            </PTRView>
        )
    }
}

var PullToRefreshProject = React.createClass({
  _refresh: function() {
    return new Promise((resolve) => {
        setTimeout(()=>{resolve()}, 2000)
        //alert('==refresh==')
    });
  },
  render: function() {
    return (
      <PTRView onRefresh={this._refresh} >
        <View style={styles.container}>
          <Text style={styles.text}>
            Let's Pull!
          </Text>
        </View>
      </PTRView>
    );
  },
});



var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    PTRView: {
        backgroundColor: 'red',
        marginTop: 64,
        height: 140
    },
    baseView: {
        flex: 1,
        //backgroundColor: 'yellow'
    },
    image: {
        marginTop: 64,
    },
    text: {
        marginTop: 0,
        color: 'red'
    },
    userList: {
        //marginTop: -60
    },
    refresh: {
        marginLeft: 0,
        marginRight: 0,
        marginTop: 64,
        height: 60,
        backgroundColor: 'red'
    }
})

const mapStateToProps = (state) => ({
    DayangState: state.LoginReduc
})
const Container = connect(
    mapStateToProps,
)(MyComponent)

module.exports = Container;
