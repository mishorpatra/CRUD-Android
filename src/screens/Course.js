import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Courses from '../api/Courses'

const Course = ({navigation}) => {

  const courseCard = ({item}) => {
    return(
      <View style={styles.mainContainer}>
        <View style={styles.cardContainer}>
          <View>
            <Image style={styles.cardImage}
              source={{
                uri: item.image
              }}
              resizeMode="contain"
               />
          </View>
          <Text style={styles.cardHeader}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonStyle}
              onPress={() => navigation.navigate('About')}
            >
              <Text style={styles.buttonText}>Course Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  
  return (
    <FlatList
      keyExtracor={(item) => item.id}
      data={Courses}
      renderItem={courseCard}
  />
  )
}

const styles = StyleSheet.create({
  cardImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1
  },
  mainContainer: {
    paddingHorizontal: 20
  },
  cardContainer: {
    padding: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 5,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    elevation: 8,
    marginVertical: 30
  },
  cardHeader: {
    fontSize: 22,
    color: '#344055',
    textTransform: 'uppercase',
    paddingBottom: 15,
    textAlign: 'center',
    fontFamily: 'Nunito_700Bold'
  },
  description: {
    textAlign: 'left',
    fontFamily: 'JosefinSans_400Regular',
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 16,
    color: '#787878'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    backgroundColor: '#809fff',
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 13,
    paddingHorizontal: 20
  },
  buttonText: {
    color: '#eee',
    fontSize: 20,
    fontFamily: 'JosefinSans_500Medium'
  }
})

export default Course