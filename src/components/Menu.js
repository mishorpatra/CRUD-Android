import React from "react";
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'


const Menu = () => {

    const navigation = useNavigation()
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity 
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("Courses")} >
                <Image style={styles.iconStyle} source={{
                    uri: 'https://img.icons8.com/external-others-phat-plus/344/external-courses-online-courses-color-line-others-phat-plus-36.png'
                }} />
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("Students")} >
                <Image style={styles.iconStyle} source={{
                    uri: 'https://img.icons8.com/external-smashingstocks-circular-smashing-stocks/344/external-students-education-smashingstocks-circular-smashing-stocks.png'
                }} />
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('About')} >
                <Image style={styles.iconStyle} source={{
                    uri: 'https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/344/external-team-leader-project-work-icongeek26-linear-colour-icongeek26-2.png'
                }} />
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("Contact")} >
                <Image style={styles.iconStyle} source={{
                    uri: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-contact-contact-us-flaticons-lineal-color-flat-icons.png'
                }} />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    iconStyle: {
        width: '100%',
        height: 50,
        aspectRatio: 1
    }

})
export default Menu