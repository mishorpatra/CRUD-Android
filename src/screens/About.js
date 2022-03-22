import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Mishor Patra</Text>
      <Text style={styles.paraStyle}>I am a full stack developer 😃</Text>

      <View style={styles.imageBx}>
        <Image style={styles.imageStyle} source={require('../../assets/dp.jpg')} />
      </View>

      <View style={styles.aboutBx}>
        <Text style={styles.subHeader}>About me</Text>
        <Text style={styles.aboutPara}>I enjoy building everything from small business sites to rich interactive web apps. If you are a business seeking, a web presence or an employer looking to hire, you can get touch with me here.I have a diverse set of skills ranging from design to HTML, CSS and javascript all the way to Node.js, MongoDb, React and Express.</Text>
      </View>

      <Text style={styles.socials}>Follow me on my Socials</Text>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.btnStyle} onPress={() => Linking.openURL("https://www.instagram.com/this_is_mishor")}>
          <Image style={styles.iconStyle} source={require('../../assets/insta.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnStyle} onPress={() => Linking.openURL("https://www.linkedin.com/in/mishor-patra-90097a1b0")}>
          <Image style={styles.iconStyle} source={require('../../assets/linkedIn.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnStyle} onPress={() => Linking.openURL("https://www.facebook.com/mishor.patra")}>
          <Image style={styles.iconStyle} source={require('../../assets/facebook.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainHeader: {
    fontSize: 18,
    color: '#344055',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginTop: 50,
    marginBottom: 10,
    fontFamily: 'JosefinSans_700Bold'
  },
  paraStyle: {
    fontSize: 18,
    color: '#7d7d7d',
    paddingBottom: 30

  },
  imageStyle: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  mainContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  aboutBx: {
    backgroundColor: '#4c5dab',
    paddingHorizontal: 30,
    marginVertical: 30
  },
  subHeader: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginVertical: 15,
    alignSelf: 'center',
    fontFamily: 'JosefinSans_700Bold'
  },
  aboutPara: {
    color: '#fff',
    paddingBottom: 30,
    fontSize: 14
  },
  menuContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly'
  },
  iconStyle: {
    width: '100%',
    height: 40,
    aspectRatio: 1
  },
  socials: {
    marginBottom: 20,
    textTransform: 'uppercase',
    fontFamily: 'JosefinSans_500Medium',
    color: '#7d7d7d'
  }
})

export default About