import axios from 'axios'

const URL = 'https://regionofknowledge.herokuapp.com/users'

export const getUsers = async (userId) => {
    let id = userId || ''
    try {
        return await axios.get(`${URL}/${id}`)
    } catch(error) {
        console.log('Error while calling the get api')
    }
}
export const addUser = async (post) => {
    console.log(post)
    try {
        return await axios.post(`${URL}/add`, post)
    } catch(error) {
        console.log('Error while calling the post api ', error)
    }
}
export const editUser = async (id, user) => {
    try {
        return await axios.put(`${URL}/${id}`, user)
    } catch(error) {
        console.log('Error while calling the edit post api ', error)
    }
}
export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`)
    } catch(error) {
        console.log('Error while calling the delete api ', error)
    }
}