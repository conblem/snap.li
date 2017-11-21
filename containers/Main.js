import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'

import Chats from './Chats'
import Camera from './Camera'

const Tabs = TabNavigator({
    Chats: {
        screen: Chats
    },
    Camera: {
        screen: Camera
    }
}, { tabBarOptions: { style: { height: 0 } } })

export default StackNavigator({
    Tabs: {
        screen: Tabs
    }
}, { headerMode: 'none' })