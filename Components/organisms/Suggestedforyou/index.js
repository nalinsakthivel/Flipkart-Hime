import React from 'react'
import { Button, StyleSheet, ScrollView, Image, View } from 'react-native'
import { Heading, Paragraph } from '../../atoms'
import Sectionbreak from '../../atoms/SectionBreak'
import { Product } from '../../molecules'
import Products from '../Products'

const suggestedforyou = () => {
    return (
        <View>

            <View style={styles.headerContainer}>
                <Image style={styles.image} source={{ uri: 'https://picsum.photos/1010/710' }} />
                <View>
                    <Heading style={styles.heading}>Suggested for you</Heading>
                    <Paragraph style={styles.paragraph}>Based on Your Interest</Paragraph>
                </View>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title='View all' />
                </View>
            </View>
            <Products />

            <Sectionbreak />
        </View>
    )
}

export default suggestedforyou

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row', padding: 10, alignItems: 'center', justifyContent: 'space-between'
    },
    image: {
        width: 50, height: 50, borderRadius: 10
    },
    heading: {
        marginLeft: 10,
        fontFamily: 'Raleway-Bold',
        fontSize: 22,
    },
    paragraph: {
        fontSize: 12,
        marginLeft: 10,
    },
    buttonContainer: {
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginVertical: 10
    }
})
