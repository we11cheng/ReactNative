import React, { Component } from 'react'
import { requireNativeComponent } from 'react-native'

class QRCode extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  onChange(event: Event) {
    if(!this.props.oncodeChange) {
      return
    }
    this.props.oncodeChange(event.nativeEvent.code)
  }
  render() {
    return(
      <Scan {...this.props} onChange={this.onChange}>
      </Scan>
    )
  }
}

QRCode.propTypes = {
  oncodeChange: React.PropTypes.func
}

var Scan = requireNativeComponent('QRCode',null)
module.exports = QRCode
