import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const gamezone = () => {
    return (
        <View style={styles.viewContainer}>
            <Text>GameZone</Text>
        </View>
    )
}

export default gamezone

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50
    }
})
