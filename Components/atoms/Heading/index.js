import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colours } from '../../../Constants'
import { Header } from '../../molecules'

const Heading = (props) =>

    <Text style={[styles.text, props.style]}>{props.children}</Text>


export default Heading

const styles = StyleSheet.create({
    text: {
        color: colours.Black,
        fontSize: 10,
        fontFamily: 'Raleway-Regular'
    }
})
