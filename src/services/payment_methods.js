import API from "../api"

export const getPaymentMethods = async () => {
  const { data } = await API.get('/payment_methods')
  return data
}

export const createPaymentMethods = async (data) => {
  try {
    const response = await API.post('/payment_methods', data)
    return response.data
  } catch (error) {
      console.log(error)
      throw error
  }
}

export const updatePaymentMethods = async (id, data) => {
  try {
    const response = await API.post(`/payment_methods/${id}`, data)
    return response.data
  } catch (error) {
      console.log(error)
      throw error
  }
}

export const deletePaymentMethods = async (id) => {
  try {
    const { data: response } = await API.delete(`/payment_methods/${id}`)
    return response
  } catch (error) {
      console.log(error)
      throw error
  }
}