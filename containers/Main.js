import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'

import Chats from './Chats'

const Tabs = TabNavigator({
    Chats: {
        screen: Chats
    }
})

export default StackNavigator({
    Tabs: {
        screen: Tabs
    }
})