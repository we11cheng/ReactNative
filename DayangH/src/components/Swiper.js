import React, { Component } from 'react'
import {
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get('window')

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },

    wrapper: {
        backgroundColor: 'blue',
        //height: 100
        flex: 2
    },
    wrapper2: {
        backgroundColor: 'red',
        //height: 100
        flex: 1
    },

    slide: {
        flex: 1,
        backgroundColor: 'transparent'
    },

    image: {
        height:300,
        width,
        flex: 1
    },

    touchOpacity: {
        flex: 1,
        height:36,
        marginLeft:10,
        marginRight:10,
        marginBottom: 50,
        backgroundColor:'yellow',
        borderRadius:3
    },

    touchTitle: {
        fontSize: 20,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        marginTop:7,
        color:'white'
    },

    swiper: {
        backgroundColor:'green'
    }

}

var swiper = React.createClass({
  render: function() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    )
  }
})
var styles2 = StyleSheet.create({
  wrapper: {
      backgroundColor: 'black',
      height: 300,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
class SwiperPage extends Component {
  render () {
    return (
      <View style={styles.container}>
          <View style={styles.wrapper2
          }>
          </View>
      <View style={styles.wrapper}>
          <Text>
              guanweicheng
          </Text>
      <Swiper style={styles.swiper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>


          </View>
          <View style={styles.wrapper2}>
              <TouchableOpacity
                  style={styles.touchOpacity}
                  onPress={() =>{alert("jiaru")}}>
                  
              </TouchableOpacity>
          </View>

      </View>
    )
  }
}
module.exports = SwiperPage;
