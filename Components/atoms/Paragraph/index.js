import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { colours } from '../../../Constants'


const Paragraph = (props) => <Text style={[styles.text, props.style]}>{props.children}</Text>



export default Paragraph

const styles = StyleSheet.create({
    text: {
        color: colours.Black,
        fontSize: 12,
        fontFamily: 'Raleway-Regular'
    }
})
