import React, { Component } from 'react'
import {
  View,
  Image,
  StatusBar,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get('window')

const styles = {
  wrapper: {
      //backgroundColor: 'blue'
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },

  image: {
    width,
    height,
    flex: 1
  }
}

class SwiperPage extends Component {
  render () {
    return (
      <View>
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
    )
  }
}
module.exports = SwiperPage;
