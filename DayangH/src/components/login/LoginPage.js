import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Button,
} from 'react-native'
import md5 from "react-native-md5"
import {baseUrl} from '../../constants/Api'
import {LoginAction} from '../actions/LoginAction'

class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userNameText: 'g1234',
            passWordText: '123456'
        }
    }
    handleClick = () => {
        var requestUrl = `${baseUrl}sessions`
        var passMd5 = md5.hex_md5(String(this.state.passWordText));
        var body = {"name": this.state.userNameText,"password":passMd5};
        //alert(JSON.stringify(body))
        fetch(requestUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        })
        .then((response) => response.json())
        .then((responseData) => {
            console.info("==recivedata==",responseData);
            console.info('==this.pros.dispatch==',this.props.dispatch)
            console.info('==LoginState==',this.props.LoginState)
            var action = LoginAction()
            console.info("==action==",action)
            //alert(JSON.stringify(responseData))
            this.props.dispatch(action)
        })
        .catch((error) => {
            //console.info("reciveerror",error);
            alert(error)
        });
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.topView}>
                    <View style={styles.userNameView}>
                        <Image style={styles.usernameImage} 
                            source={require('../../resources/user_name@2x.png')} />
                        <TextInput style={styles.textInput}
                            placeholder='请输入用户名'
                            keyboardType='email-address'
                            returnKeyType='next'
                            onChangeText={(text) => {
                                this.setState({
                                    userNameText:text
                                })
                            }}
                            value={this.state.userNameText}
                        />
                    </View>
                    <View style={styles.separateView}>
                    </View>
                    <View style={styles.passWordView}>
                        <Image style={styles.passwordImage} 
                            source={require('../../resources/pass_word@2x.png')} />
                        <TextInput style={styles.textInput}
                            placeholder='请输入密码'
                            keyboardType='email-address'
                            secureTextEntry={true}
                            returnKeyType='done'
                            onChangeText={(text) => {
                                this.setState({
                                    passWordText:text
                                })
                            }}
                            value={this.state.passWordText}
                        />
                    </View>
                </View>
                <View style={styles.loginView}>
                    <Button style={styles.loginButton}
                        title='登录'
                        color='white'
                        onPress={(e) => {
                            //alert('denglu')
                            if(this.state.userNameText.length ===0) {
                                alert('请输入用户名')
                                return;
                            }
                            if(this.state.passWordText.length ===0) {
                                alert('请输入密码')
                                return;
                            }
                            //alert('========')
                            this.handleClick()
                        }}
                    />
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
        backgroundColor: '#09a6c1'
    },
    topView: {
        //flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        height:90,
        backgroundColor: 'white',
        borderRadius: 3
    },
    separateView: {
        height: 1,
        backgroundColor: '#09a6c1'
    },
    usernameImage: {
        width: 22,
        height: 22,
        marginLeft: 10,
    },
    passwordImage: {
        width: 22,
        height: 22,
        marginLeft: 10,
    },
    userNameView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        //backgroundColor: 'red'
    },
    passWordView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        //backgroundColor: 'yellow'
    },
    textInput: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        //borderColor: 'gray', 
        //borderWidth: 1
    },
    loginView: {
        height: 45,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'red'
    },
    loginButton: {
        flex:1,
        backgroundColor: 'red'
    }


}) 
/*
const mapDispatchToProps = (dispatch) => ({
    LoginDispatch:() => {
        dispatch(LoginAction())
    }
})

const Container = connect(
    mapDispatchToProps,
)(LoginPage)
*/
const mapStateToProps = (state) => ({
    LoginState:state
})

const Container = connect(
    mapStateToProps,
)(LoginPage)

module.exports = Container;
