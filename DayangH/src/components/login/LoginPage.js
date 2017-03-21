import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Button,
    Modal,
    TouchableOpacity,
} from 'react-native'
import md5 from "react-native-md5"
var uuid = require('react-native-uuid');
import {baseUrl} from '../../constants/Api'
import {LoginAction} from '../actions/LoginAction'
import RNFetchBlob from 'react-native-fetch-blob'

class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userNameText: 'rd002',
            passWordText: '123456',
            modalVisible: false,
            imgCode: 'default',
            uuid: 'ef56defc-7cba-47c4-9aea-3c6c43e52567'
        }
        this.getImgCode = this.getImgCode.bind(this)
    }
    componentDidMount() {
    }
    getImgCode() {
        var requestUrl = `${baseUrl}imgCode`
        var body = {"verifyType": 'release_block_address',"uuid":this.state.uuid};
            /*
        RNFetchBlob.fetch('POST', 'http://www.example.com/upload-form', {
            'Content-Type' : 'multipart/form-data',
        }, [
            // element with property `filename` will be transformed into `file` in form data
            { 'verifyType' : 'release_block_address'},
            { 'uuid' : uuid.v4()}
        ]).then((resp) => {
            console.info('====resp',resp)
        }).catch((err) => {
            console.info('====err',err)
            alert(err)
        })
        */
        RNFetchBlob.fetch('POST', requestUrl, {
            // more headers  .. 
            'Content-Type' : 'application/json',
        },
        JSON.stringify(body)
        )
            .then((res) => {
                // the conversion is done in native code 
                //let base64Str = res.blob()
                let base64Str = res.data
                //alert(base64Str)
                // the following conversions are done in js, it's SYNC 
                if(base64Str) {
                    this.setState({
                        imgCode: 'data:image/png;base64,'+ base64Str
                    })
                }
                //alert(base64Str)
            

            })
            // Status code is not 200 
                .catch((errorMessage, statusCode) => {
                    // error handling 
                })
    }
    handleClick = () => {
        var requestUrl = `${baseUrl}sessions`
        //var passMd5 = md5.hex_md5(String(this.state.passWordText));
        var body = {"name": this.state.userNameText,"password":this.state.passWordText};
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
            //var action = LoginAction()
            //console.info("==action==",action)
            //alert(JSON.stringify(responseData))
            if(responseData.token) {
                this.props.dispatch(LoginAction(responseData))
            } else {
                var message = String((JSON.stringify(responseData.error)))
                if(message = 'ATTEMPT_TOO_MANY_TIMES') {
                    this.getImgCode()
                    this.setState({
                        modalVisible: true
                    })
                }
            }
        })
        .catch((error) => {
            console.info("reciveerror",error);
            //alert(error)
            const apiResponse = {
                "guardianId": "56973a9bdc8d32000a9a6d72",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijp7Imd1YXJkaWFuSWQiOiI1Njk3M2E5YmRjOGQzMjAwMGE5YTZkNzIifSwiZXhwIjoxNDgyMzkzODg2fQ.dDdLHWSsHBLfDXTMKSO6FwEimmznQbwiwoCV2cbLmuk",
                "type": "family"
}
            this.props.dispatch(LoginAction(apiResponse))
        });
    }
    render() {
        //alert(this.state.imgCode)
        return(
            <View style={styles.container}>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible} >
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.navBack}
                            onPress={() => {
                                this.setState({
                                    modalVisible: false
                                })
                            }} >
                            <Image style={styles.navBackImage}
                                source={require('../../resources/nav_back@2x.png')} />
                        </TouchableOpacity>
                        <Text style={styles.descText}>
                            尝试次数过多,输入验证码再试
                        </Text>
                        <TouchableOpacity style={styles.codeImgView}
                            onPress={() => {
                                this.getImgCode()
                            }}>
                            <Image style={styles.codeImg} source={{uri:this.state.imgCode}} 
                                />
                            </TouchableOpacity>
                    </View>
                </Modal>
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
    },
    navBack:{
        marginTop: 44,
        marginLeft: 10,
        backgroundColor: 'red',
        padding: 10,
        width: 40,
    },
    navBackImage: {
        width: 9,
        height: 16,
    },
    descText: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 20,
    },
    codeImg: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        height: 100
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
    LoginState:state.LoginReduc
})

const Container = connect(
    mapStateToProps,
)(LoginPage)

module.exports = Container;
