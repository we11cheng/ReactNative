import React, { Component } from 'react'
import {
  View,
  Image,
  StatusBar,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get('window')
import RegistPage from './regist/RegistPage'
import LoginPage from './login/LoginPage'

class AppGuide extends Component {
  render () {
    return (
      <View style={styles.container}>
          <View style={styles.swiperView}>
          <Swiper style={styles.wrapper}
            dot={<View style={{backgroundColor: 'rgba(9,166,193,0.5)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
            activeDot={<View style={{backgroundColor: 'rgba(9,166,193,1)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
            paginationStyle={{
              bottom: 180
            }}
            loop={false}>
            <View style={styles.slide}>
                <Image style={styles.image} source={require('../resources/first_page@2x.jpg')} />
            </View>
            <View style={styles.slide}>
              <Image style={styles.image} source={require('../resources/second_page@2x.jpg')} />
            </View>
            <View style={styles.slide}>
              <Image style={styles.image} source={require('../resources/third_page@2x.jpg')} />
            </View>
          </Swiper>
      </View>
      <View style={styles.bottomView}>
          <TouchableOpacity
              onPress= {() => {
                  this.props.navigator.push({
                      component: RegistPage,
                      title: '手机号注册'
                  })
              }}
              style={styles.registTouchable}>
              <Text
                  style={styles.registText}>
                  立即加入
              </Text>
          </TouchableOpacity>
          <TouchableOpacity
              onPress= {() => {
                  this.props.navigator.push({
                      component: LoginPage,
                      title: '登录'
                  })
              }}
              style={styles.loginTouchable}>
              <Text
                  style={styles.loginText}>
                  登录
              </Text>
          </TouchableOpacity>
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
    },
    wrapper: {
        // backgroundColor: '#f00'
    },

    slide: {
        flex: 1,
        backgroundColor: 'transparent'
    },

    image: {
        width,
        height,
        flex: 1
    },

    bottomView: {
        //flex: 1,
        height: 170,
        // backgroundColor: 'red'
    },

    swiperView: {
        flex: 1,
        backgroundColor: 'yellow'
    },

    registTouchable: {
        marginTop: 40,
        alignItems: 'center',
        height: 36,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#09a6c1',
        borderRadius: 3
    },

    loginTouchable: {
        marginTop: 20,
        alignItems: 'center',
        height: 36,
        marginLeft: 130,
        marginRight: 130,
        //backgroundColor:'#09a6c1',
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

    loginText: {
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 7,
        color: '#e89026'
    },
})

module.exports = AppGuide;
