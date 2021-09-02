import React from 'react'
import { StyleSheet, FlatList, View, StatusBar } from 'react-native'
import { colours } from '../../Constants'
import { Heading } from '../atoms'
import { Category, Product } from '../molecules'
import { Header, Categories, Carousel, Suggestedforyou, SubCategory } from '../organisms'
import Products from '../organisms/Products'

import data from './data'


const homeScreen = () => {
    return (
        <View style={styles.mainView}>
            <StatusBar backgroundColor={colours.Blue} barStyle='light-content' />
            <Header />




            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item: { title }, index }) => {
                    return <SubCategory title={title} backgroundColor={index % 2 === 0 ? colours.yellow : colours.White} />
                }}
                ListHeaderComponent={
                    <View>
                        <Categories />
                        <Carousel />
                        <Suggestedforyou />
                    </View>
                }


            />
        </View>
    )
}

export default homeScreen

const styles = StyleSheet.create({
    mainView: {
        flex: 1
    }
})
