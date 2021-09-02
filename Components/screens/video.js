import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const video = () => {
    return (
        <View style={styles.viewContainer}>
            <Text>Video</Text>
        </View>
    )
}

export default video

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50
    }
})
