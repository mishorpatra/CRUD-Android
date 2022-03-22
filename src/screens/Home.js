import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

//components
import Menu from '../components/Menu'

const Home = ({channelName}) => {
const description = 'This is an education app which will help you to learn coding. React is an awesome thing to learn so you can try it anytime you want.'
  
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image style={styles.headerImage}
          resizeMode="contain"
          source={require("../../assets/logo.jpg")} 
        />
      <Text style={styles.mainHeader}>Welcome to</Text>
      <Text style={[styles.mainHeader, {
        fontSize: 25,
        color: '#4c5dab',
        marginTop: 0
      }]}>{channelName}</Text>
      <Text style={styles.paraStyle}>{description}</Text>
      </View>
      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View style={[styles.lineStyle, {
          marginVertical: 10
        }]}></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        textAlign: 'center'
      },
      homeTop: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
      },
      headerImage: {
        height: undefined,
        width: '100%',
        aspectRatio: 1,
        display: 'flex',
        alignItems: 'stretch',
        marginTop: 50,
        borderRadius: 10
      },
      mainHeader: {
        fontSize: 30,
        color: '#344055',
        textTransform: 'uppercase',
        fontFamily: 'Nunito_600SemiBold'
      },
      paraStyle: {
        marginTop: 30,
        color: '#7d7d7d',
        lineHeight: 26,
        fontSize: 19,
        paddingBottom: 50,
        fontFamily: 'JosefinSans_400Regular'
      },
      lineStyle: {
        marginBottom: 10,
        borderWidth: 0.5,
        borderColor: 'grey'
      }
})

export default Home

