import API from "../api"

export const getPaymentMethods = async () => {
  const { data } = await API.get('/payment_methods')
  return data
}