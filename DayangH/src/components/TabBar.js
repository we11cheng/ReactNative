import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Button,
    TabBarIOS,
    NavigatorIOS,
} from 'react-native'
import ReportPage from './reportPage/ReportPage'
import StatePage from './familyState/State'
import SetPage from './set/Set'

class TabBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'report',
        }
    }
    render() {
        return (
            <TabBarIOS
                unselectedTintColor='gray'
                tintColor='#09a6c1'
                barTintColor='white'>
                <TabBarIOS.Item
                    title='睡眠分析'
                    icon={require('../resources/first_selected@2x.png')}
                    selected={this.state.selectedTab === 'report'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'report',
                        });
                    }}>
                    <NavigatorIOS
                        barTintColor='#09a6c1'
                        titleTextColor='white'
                        style={styles.navigator}
                        initialRoute={{
                            component: ReportPage,
                            passProps: {},
                            title: '睡眠分析',
                        }}/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title='亲人状态'
                    icon={require('../resources/second_selected@2x.png')}
                    selected={this.state.selectedTab === 'state'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'state',
                        });
                    }}>
                    <NavigatorIOS
                        barTintColor='#09a6c1'
                        titleTextColor='white'
                        style={styles.navigator}
                        initialRoute={{
                            component: StatePage,
                            passProps: {},
                            title: '亲人状态',
                        }}/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title='设备设置'
                    icon={require('../resources/third_selected@2x.png')}
                    selected={this.state.selectedTab === 'set'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'set',
                        });
                    }}>
                    <NavigatorIOS
                        barTintColor='#09a6c1'
                        titleTextColor='white'
                        style={styles.navigator}
                        initialRoute={{
                            component: SetPage,
                            passProps: {},
                            title: '设备设置',
                        }}/>
                </TabBarIOS.Item>
                </TabBarIOS>
                )
                }
}

var styles = StyleSheet.create({
    navigator: {
        flex: 1,
    }
})

module.exports = TabBar;


