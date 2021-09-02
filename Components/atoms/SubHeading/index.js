import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colours } from '../../../Constants'
import { Header } from '../../molecules'

const SubHeading = (props) =>

    <Text style={[styles.text, props.style]}>{props.children}</Text>


export default SubHeading

const styles = StyleSheet.create({
    text: {
        color: colours.Black,
        fontSize: 14,
        fontFamily: 'Raleway-Bold'
    }
})
