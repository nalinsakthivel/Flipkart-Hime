import React from 'react'
import { StyleSheet, Text, Image, View, TextInput } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Flipkarticon } from '../../../Assets'
import { colours } from '../../../Constants'

const Header = () => {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.mainContainer}>
                <View style={styles.imageContainer}>
                    <Feather name='menu' size={20} color={colours.White} style={styles.menuIcon} />
                    <Image style={styles.imageStyle} source={Flipkarticon} />
                </View>
                <View style={styles.iconContainer}>
                    <Ionicons name='notifications' size={20} color={colours.White} style={styles.notificationIcon} />
                    <Ionicons name='cart' size={20} color={colours.White} style={styles.cartIcon} />
                </View>

            </View>
            <View style={styles.searchView}>
                <View style={styles.searchContainer}>
                    <View style={styles.textInputContainer}>
                        <Ionicons name='search-outline' size={20} color={colours.Gray} />
                        <TextInput
                            style={styles.nameinputContainer}
                            autoCapitalize="none"
                            autoCorrect
                            placeholder="Search for Products, Brands and More"
                            placeholderTextColor={colours.Gray}
                        />
                    </View>
                    <View style={styles.icon} >
                        <Ionicons name='mic' size={20} color={colours.Blue} />
                    </View>
                </View>
            </View>
        </View>

    )
}

export default Header

const styles = StyleSheet.create({
    viewContainer: {
        height: 120,
        backgroundColor: colours.Blue,
        alignItems: 'center'

    },
    mainContainer: {
        marginVertical: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
        padding: 10,
        backgroundColor: colours.Blue
    },
    notificationIcon: {
        marginRight: 20,
    },
    cartIcon: {
        marginRight: 10
    },
    imageContainer: {
        alignItems: 'center',
        flexDirection: 'row',

    },
    iconContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    imageStyle: {
        width: 72,
        height: 30,
        marginLeft: 15,
    },
    searchView: {
        width: '95%',
        height: 40,
        backgroundColor: colours.White,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3

    },
    searchContainer: {
        width: '100%',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textInputContainer: { flexDirection: 'row', alignItems: 'center' },
    icon: { height: '100%', width: 40, backgroundColor: colours.Lightblue, alignItems: 'center', justifyContent: 'center', transform: [{ translateX: 10 }] }
})
