import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { Heading, Paragraph } from '../../atoms'
import Sectionbreak from '../../atoms/SectionBreak'
import Products from '../Products'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { colours } from '../../../Constants'

const SubCategory = ({ title, backgroundColor }) => {
    return (
        <View style={{ backgroundColor: backgroundColor || colours.White }} >
            <View style={styles.headerContainer}>
                <View>
                    <Heading style={styles.heading}>{title}</Heading>
                </View>
                <View style={styles.buttonContainer}>
                    < MaterialIcons name='keyboard-arrow-right' size={20} color={colours.White} />
                </View>
            </View>

            <Products />
        </View>
    )
}

export default SubCategory

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10
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
        backgroundColor: colours.Blue,
        borderRadius: 20
    },

})
