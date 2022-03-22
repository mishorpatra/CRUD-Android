import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import React, {useState} from 'react'
import Chehckbox from 'expo-checkbox'
import { addUser } from '../api/apiCall'

const initialValues = {
  name: '',
  username: '',
  email: '',
  mobile: ''
}

const Contact = ({navigation}) => {

  const [user, setUser] = useState(initialValues)
  //const [message, setMessage] = useState('')
  const [agree, setAgree] = useState(false)
  const [adding, setAdding] = useState(false)

  const handleChange = (name, value) => {
    setUser({...user, [name]: value})
  }
  const submit = async () => {
    const { name, email, username, mobile } = user
    if(!name || !email || !username || !mobile ) {
      Alert.alert('Please fill all the fields!!')
    }
    else {
      setAdding(true)
      await addUser(user)
      setAdding(false)
      Alert.alert(`Thanks ${name}`)
      navigation.navigate("Students")
    }
  }

  if(adding) return <View style={styles.loadingScreen}><ActivityIndicator size="large" color="#555" /></View>

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Level up your Knowledge</Text>
      <Text style={styles.description}>You can reach us anytime via mishorpatra1608@gmail.com</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your name</Text>
        <TextInput style={styles.inputStyle} placeholder="E.g. Mishor Patra" onChangeText={(value) => handleChange("name", value)} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your Username</Text>
        <TextInput style={styles.inputStyle} placeholder="E.g. Mishor_123" onChangeText={(value) => handleChange("username", value)} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your Email</Text>
        <TextInput style={styles.inputStyle} placeholder="E.g. mishor@gmail.com" onChangeText={(value) => handleChange("email", value)} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your Mobile</Text>
        <TextInput style={styles.inputStyle} placeholder="E.g. 1234567890"  onChangeText={(value) => handleChange("mobile", value)} />
      </View>
      {/*<View style={styles.inputContainer}>
        <Text style={styles.labels}>How may we help you ?</Text>
        <TextInput style={[styles.inputStyle, styles.multilineStyle]} numberOfLines={5} multiline={true} placeholder="Tell us about yourself" value={message} onChangeText={(userData) => setMessage(userData)} />
  </View>*/}

      <View style={styles.wrapper}>
        <Chehckbox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? '#4630eb' : undefined}
        />
        <Text style={styles.wrapperText}>I have read and agreed with all the terms and conditions</Text>
      </View>

      <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: agree ? '#4630eb' : 'grey' }]} disabled={!agree} onPress={submit} >
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: 30,
    backgroundColor: '#fff'
  },
  mainHeader: {
    fontSize: 20,
    color: '#344055',
    fontWeight: '500',
    paddingTop: 20,
    paddingBottom: 15,
    fontFamily: 'JosefinSans_500Medium',
    textTransform: 'capitalize'
  },
  description: {
    fontSize: 18,
    color: '#7d7d7d',
    paddingBottom: 20,
    fontFamily: 'JosefinSans_300Light'
  },
  inputStyle: {
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2
  },
  inputContainer: {
    marginTop: 20
  },
  labels: {
    fontWeight: 'bold',
    color: '#7d7d7d',
    paddingBottom: 5,
    fontFamily: 'JosefinSans_300Light'
  },
  multilineStyle: {
    paddingVertical: 4
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: 'flex',
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#eee'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    fontFamily: 'JosefinSans_300Light'
  },
  wrapperText: {
    marginLeft: 10,
    color: '#7a7a7a',
    fontFamily: 'JosefinSans_300Light'
  },
  loadingScreen: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Contact