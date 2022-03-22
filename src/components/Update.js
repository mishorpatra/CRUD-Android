import {View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Alert} from 'react-native'
import { useEffect, useState } from 'react'
import { getUsers, editUser } from '../api/apiCall'

const initialValues = {
    name: '',
    username: '',
    email: '',
    mobile: ''
}
const Update = ({id, setVisible}) => {
    const [user, setUser] = useState(initialValues)
    const [updating, setUpdating] = useState(false)
    const handleChange = (name, value) => {
        setUser({...user, [name]: value})
    }
    useEffect(() => {
        const getUserData = async () => {
            let response = await getUsers(id)
            setUser(response.data)
        }
        getUserData()
    }, [])

    const submit = async () => {
        setUpdating(true)
        let response = await editUser(id, user)
        if(response) setUpdating(false)
        setVisible(false)
    }
    if(!user.name) return <View style={{flexDirection: 'row', alignItems: 'center'}}><Text>Fetching user... </Text><ActivityIndicator size="large" color="#555" /></View>
    if(updating) return <View style={{flexDirection: 'row', alignItems: 'center'}}><Text>Updating user... </Text><ActivityIndicator size="large" color="#555" /></View>
    return (
       <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
            <Text style={styles.labels}>Enter your name</Text>
            <TextInput style={styles.inputStyle} placeholder="E.g. Mishor Patra" value={user.name} onChangeText={(value) => handleChange("name", value)} />
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.labels}>Enter your Username</Text>
            <TextInput style={styles.inputStyle} placeholder="E.g. Mishor_123" value={user.username} onChangeText={(value) => handleChange("username", value)} />
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.labels}>Enter your Email</Text>
            <TextInput style={styles.inputStyle} placeholder="E.g. mishor@gmail.com" value={user.email} onChangeText={(value) => handleChange("email", value)} />
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.labels}>Enter your Mobile</Text>
            <TextInput style={styles.inputStyle} placeholder="E.g. 1234567890" value={`${user.mobile}`}  onChangeText={(value) => handleChange("mobile", value)} />
        </View>
        <TouchableOpacity style={styles.buttonStyle} onPress={submit} >
            <Text style={styles.buttonText}>Update</Text>
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
      inputContainer: {
        marginTop: 20
      },
      labels: {
        fontWeight: 'bold',
        color: '#7d7d7d',
        paddingBottom: 5,
        fontFamily: 'JosefinSans_300Light'
      },
      inputStyle: {
        borderWidth: 0.5,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderRadius: 2
      },
      buttonStyle: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 18,
        display: 'flex',
        marginVertical: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4630eb'
      },
      buttonText: {
        color: '#eee'
      }
})

export default Update