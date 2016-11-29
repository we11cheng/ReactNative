import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    NavigatorIOS,
    Image,
    TouchableHighlight,
} from 'react-native'

class UserListCell extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.topView}>
                    <Image style={styles.userImage}
                        source={require('../../resources/familyState/nodataboy@2x.png')}
                    />
                    <Text style={styles.userNameText}>
                        {this.props.userName}
                    </Text>
                    <TouchableOpacity style={styles.highlight} onPress={this.props.gotoEdit}>
                        <Image style={styles.editImage}
                            source={require('../../resources/familyState/userEdit@2x.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.centerView}>
                    <Text style={styles.centerText}>
                        0
                    </Text>
                    <Text style={styles.centerText}>
                        掉线
                    </Text>
                    <Text style={styles.centerText}>
                        0
                    </Text>
                </View>
                <View style={styles.bottomView}>
                    <Image style={styles.bottomImage}
                        source={require('../../resources/familyState/newoffLineBeat@2x.png')}
                    />
                    <Image style={styles.bottomImage}
                        source={require('../../resources/familyState/newoffLineState@2x.png')}
                    />
                    <Image style={styles.bottomImage}
                        source={require('../../resources/familyState/newoffLineBreath@2x.png')}
                    />
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        marginTop: 10,
        height: 180,
        marginLeft: 10,
        marginRight: 10,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 3,
        
    },
    topView: {
        height: 60,
        marginLeft: 0,
        marginRight: 0,
        backgroundColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    centerView: {
        height: 60,
        marginLeft: 0,
        marginRight: 0,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomView: {
        height: 60,
        marginLeft: 0,
        marginRight: 0,
        backgroundColor: 'yellow',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginLeft: 10,
    },
    userNameText: {
        flex: 1,
        backgroundColor: 'red'
    },
    centerText: {
        flex: 1,
        //backgroundColor: 'white',
        fontSize: 30,
        textAlign: 'center'
    },
    editImage: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    bottomImage: {
        width: 22,
        height: 22,
        //flex: 1
    },
    highlight: {
        //backgroundColor: 'red'
        //underlayColor: 'gray'
    }
})

module.exports = UserListCell;
