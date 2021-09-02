import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import { Paragraph } from '../../atoms'

const Category = ({ imageURL, category }) => {
    return (
        <View style={styles.viewContainer}>

            <Image
                style={styles.image}
                source={{ uri: imageURL }}
            />
            <Paragraph style={styles.textContainer}>{category}</Paragraph>


        </View>
    )
}

export default Category

const styles = StyleSheet.create({
    viewContainer: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },

    image: {
        borderRadius: 15,
        width: 30,
        height: 30
    },
    textContainer: {
        fontSize: 8,
        width: 60,
        textAlign: 'center'

    }
})
