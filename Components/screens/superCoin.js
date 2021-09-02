import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const superCoin = () => {
    return (
        <View style={styles.viewContainer}>
            <Text>SuperCoin</Text>
        </View>
    )
}

export default superCoin

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50
    }
})
