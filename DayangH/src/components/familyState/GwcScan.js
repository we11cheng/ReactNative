import React, { Component } from 'react'
import { requireNativeComponent } from 'react-native'

class GwcScanView extends React.Component {
    render() {
        return(
            <GWCScan />
        )
    }
}

var GWCScan = requireNativeComponent('GwcScan',null)
module.exports = GwcScanView
