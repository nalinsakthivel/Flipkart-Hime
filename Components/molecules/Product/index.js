import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Paragraph, SubHeading } from '../../atoms'


const Product = ({ imageURL, Price, Name }) => {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.contentContainer}>
                <View>
                    <Image
                        style={styles.image}
                        source={{ uri: imageURL }}
                    />
                </View>
                <View style={styles.contentContainer}>
                    <SubHeading >{Name}</SubHeading>
                    <Paragraph>{'\u20B9'} {Price}</Paragraph>
                </View>
            </View>
        </View>
    )
}

export default Product


const styles = StyleSheet.create({
    viewContainer: {

        width: 100,
        height: 130,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    contentContainer: {
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 5
    },

})
