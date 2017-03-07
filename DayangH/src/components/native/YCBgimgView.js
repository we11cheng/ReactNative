import React, { Component } from 'react'
import { requireNativeComponent } from 'react-native'

class YCBgimgView extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <YCBgimg {...this.props} >
        {this.props.children}
      </YCBgimg>
    )
  }
}
var YCBgimg = requireNativeComponent('YCBgimg',null)

module.exports = YCBgimgView
