import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    listTile: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        borderLeftWidth: 10,
        borderLeftColor: 'blue'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default ({ item }) => {
    const { title, subTitle, active, onPress } = item
    return (
        <TouchableOpacity onPress={() => onPress(item)} style={styles.listTile}>
            <Text style={styles.title}>{title}</Text>
            <Text>{subTitle}</Text>
        </TouchableOpacity>
    )
}

