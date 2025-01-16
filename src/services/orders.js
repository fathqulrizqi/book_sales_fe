import API from "../api"

export const createOrder = async (data) => {
  try {
    const response = await API.post('/orders', data, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    return response.data
} catch (error) {
    console.log(error)
    throw error
}
}