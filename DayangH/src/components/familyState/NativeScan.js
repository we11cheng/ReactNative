import React, { Component } from 'react'
import { requireNativeComponent } from 'react-native'

    /*
class NativeScanView extends React.Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }
    onChange(event) {
        if(!this.props.oncodeChange) {
            return
        }
        this.props.oncodeChange(event)
    }
    render() {
        <Scan {...this.props} onChange={this.onChange}>
        </Scan>
    }
}

NativeScanView.propTypes = {
    oncodeChange:React.PropTypes.func
}
*/

//var Scan = requireNativeComponent('NativeScan',NativeScanView)

module.exports = requireNativeComponent('NativeScan',null)
