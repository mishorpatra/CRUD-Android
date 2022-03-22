import { FlatList, StyleSheet, Text, View, Image, ActivityIndicator, TouchableOpacity, Button } from 'react-native'
import React, {useEffect, useState} from 'react'
import { getUsers, deleteUser } from '../api/apiCall'
import Dialog from 'react-native-dialog'

//components
import Update from '../components/Update'

const UserData = () => {
const [myData, setMyData] = useState([])
const [isLoaded, setIsLoaded] = useState(true)
const [visible, setVisible] = useState(false)
const [visibleDelete, setVisibleDelete] = useState(false)
const [activeId, setActiveId] = useState('')

  const getUserData = async () => {
    const response = await getUsers()
    const realData = await response.data
    setMyData(realData)
    setIsLoaded(false)
  }
  useEffect(() => {
    getUserData()
  }, [visible])

  const editUser = (id) => {
    showDialog(true)
    setActiveId(id)
  }
  const showDialogDelete = () => {
    setVisibleDelete(true)
  }
  const deleteHandle = async (id) => {
    setVisibleDelete(true)
    setActiveId(id)
    /*await deleteUser(id)
    setIsLoaded(true)
    getUserData()*/
  }
  const handleCancelDelete = () => {
    setVisibleDelete(false)
  }
  const handleDelete = async () => {
    await deleteUser(activeId)
    setVisibleDelete(false)
    setIsLoaded(true)
    getUserData()
  }
  const showDialog = () => {
    setVisible(true)
  }
  const handleCancel = () => {
    setVisible(false)
  }
  
  if(isLoaded) return <View style={styles.loadingScreen}><ActivityIndicator size="large" color="#555" /></View>
  const showUserData = ({item}) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.imageStyle} source={{uri: 'https://coursebari.com/wp-content/uploads/2021/06/899048ab0cc455154006fdb9676964b3.jpg'}} />
        </View>
        <View style={styles.card}>
          <View style={styles.bioDataContainer}>
            <Text style={styles.bioData}>{item.username}</Text>
            <Text style={styles.idNumber}>{myData.indexOf(item)+1 < 10 ? `#0${myData.indexOf(item)+1}` : `#${myData.indexOf(item)+1}`}</Text>
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.text}>👤 {item.name}</Text>
            <Text style={styles.text}>✉️ {item.email}</Text>
            <Text style={styles.text}>📞 {item.mobile}</Text>
            <View style={styles.actionBx}>
              <TouchableOpacity onPress={() => editUser(item._id)} style={[styles.btnStyle, {backgroundColor: 'rgba(0, 0, 255, 0.8)'}]}><Text>✏️</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => deleteHandle(item._id)} style={[styles.btnStyle, {backgroundColor: 'red'}]}><Text>🗑️</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }
  return (
    <View>
      <Text style={styles.mainHeader}>List of Students</Text>
      <FlatList
        keyExtractor={(item) => item._id}
        data={myData}
        renderItem={showUserData}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
      <View style={styles.container}>
        <Button title="Show dialog" onPress={showDialog} />
        <Dialog.Container visible={visible}>
          <Dialog.Title>Update data</Dialog.Title>
          <Dialog.Description>
            <Update id={activeId} setVisible={setVisible} />
          </Dialog.Description>
          <Dialog.Button label="Cancel" onPress={handleCancel} />
        </Dialog.Container>
      </View>
      <View style={styles.container}>
        <Button title="Show dialog" onPress={showDialogDelete} />
        <Dialog.Container visible={visibleDelete}>
          <Dialog.Title>Are you sure ?</Dialog.Title>
          
          <Dialog.Button label="Cancel" onPress={handleCancelDelete} />
          <Dialog.Button style={{color: 'red'}} label="Delete" onPress={handleDelete} />
        </Dialog.Container>
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    minHeight: '100%',
    paddingVertical: 30,
    backgroundColor: '#ebedee'
  },
  card: {
    width: 250,
    minHeight: 150,
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 20
  },
  bioDataContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#353535',
    padding: 10,
    fontFamily: 'JosefinSans_400Regular'
  },
  idNumber: {
    color: '#fff',
    opacity: 0.5,
    fontSize: 20,
    fontFamily: 'JosefinSans_400Regular'
  },
  bioData: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'JosefinSans_400Regular'
  },
  mainHeader: {
    fontSize: 30,
    color: '#a18ce5',
    textAlign: 'center',
    fontFamily: 'JosefinSans_400Regular'
  },
  imageContainer: {
    paddingHorizontal: 20
  },
  imageStyle: {
    width: '100%',
    height: 180
  },
  dataContainer: {
    padding: 10,
    backgroundColor: '#fff'
  },
  text: {
    color: '#333',
    marginBottom: 5,
    fontSize: 16,
    alignSelf: 'flex-start',
    fontFamily: 'JosefinSans_400Regular',
    textTransform: 'capitalize'
  },
  loadingScreen: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionBx: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  btnStyle: {
    marginHorizontal: 2,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 3
  }
})

export default UserData