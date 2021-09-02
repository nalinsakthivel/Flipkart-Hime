import React from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native'

import { Category } from '../../molecules'
import data from './data'
const index = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data.map(({ id, category, imageURL }) => <Category category={category} imageURL={imageURL} key={id} />)}
        </ScrollView>
    )
}

export default index

const styles = StyleSheet.create({})
