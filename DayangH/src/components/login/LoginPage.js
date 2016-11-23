import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
} from 'react-native'

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userNameText: '',
            passWordText: ''
        }
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
                            returnKeyType='done'
                            onChangeText={(text) => {
                                this.setState({
                                    passWordText:text
                                })
                            }}
                        />
                    </View>
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
    }

}) 

module.exports = LoginPage;
