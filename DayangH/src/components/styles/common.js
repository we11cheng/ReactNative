var React   = require('react-native');
import {
  StyleSheet,
  PixelRatio,
  Dimensions,
} from 'react-native';

var cell_w = Dimensions.get('window').width;

var styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    }
})

module.exports = styles;
