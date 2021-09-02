import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'

import { Product } from '../../molecules'
import data from './data'

const Products = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            <View style={styles.container}>
                {data.map(({ id, Price, imageURL, Name }) => <Product Name={Name} Price={Price} imageURL={imageURL} key={id} />)}
            </View>
        </ScrollView>
    )
}

export default Products

const styles = StyleSheet.create({ container: { flexDirection: 'row', margin: 10 } })
