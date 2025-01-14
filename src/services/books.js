import API from "../api"

export const getBooks = async () => {
  const { data } = await API.get('/books')
  return data.data
}

export const createBook = async (data) => {
  try {
    const response = await API.post('/books', data)
    return response.data
  } catch (error) {
      console.log(error)
      throw error
  }
}

export const updateBook = async (id, data) => {
  try {
    const response= await API.post(`/books/${id}`, data)
    return response.data
  } catch (error) {
      console.log(error)
      throw error
  }
}

export const deleteBook = async (id) => {
  try {
    const { data: response } = await API.delete(`/books/${id}`)
    return response
  } catch (error) {
      console.log(error)
      throw error
  }
}