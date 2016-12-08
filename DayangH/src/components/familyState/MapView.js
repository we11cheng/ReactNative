import React, { Component } from 'react'
import { requireNativeComponent } from 'react-native';



class MyMapView extends React.Component {
    render() {
        return(
            <RCTGWCMap {...this.props} />
        )
    }
}
MyMapView.propTypes = {
    pitchEnabled: React.PropTypes.bool,
    zoomEnabled: React.PropTypes.bool
}

var RCTGWCMap = requireNativeComponent('Gwc',MyMapView)

module.exports = MyMapView
