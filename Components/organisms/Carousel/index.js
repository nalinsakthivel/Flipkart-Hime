import React, { useState } from 'react'
import { StyleSheet, Platform, Dimensions, View } from 'react-native'
import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen')
import data from './data'

const Caousel = () => {
    const [activeSlide, setActiveslide] = useState(0);
    const renderItem = ({ item: { imageURL } }, parallaxProps) =>
        <View style={styles.item}>
            <ParallaxImage
                source={{ uri: imageURL }}
                containerStyle={styles.imageContainer}
                style={styles.image}
                parallaxFactor={0.4}
                {...parallaxProps}
            />
        </View>

    const pagination = () => {
        return (
            <Pagination
                dotsLength={data.length}
                activeDotIndex={activeSlide}
                containerStyle={{ position: 'absolute', bottom: -15 }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: 'rgba(255, 255, 255, 1)'
                }}
                inactiveDotOpacity={0.5}
                inactiveDotScale={0.6}
            />
        );
    }

    return (
        <View>

            <Carousel
                data={data}
                renderItem={renderItem}
                sliderWidth={screenWidth}
                sliderHeight={100}
                itemWidth={screenWidth}
                layout={'default'}
                hasParallaxImages
                onSnapToItem={(index) => setActiveslide(index)}
            />
            {pagination()}
        </View>
    )
}


export default Caousel

const styles = StyleSheet.create({
    item: {
        width: screenWidth,
        height: screenHeight * 0.2,
    },
    imageContainer: {

        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
    },
    image: {

        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
})

