import API from "../api"

export const getAuthors = async () => {
  const { data } = await API.get('/authors')
  return data
}

export const createAuthor = async (data) => {
  try {
    const { data: response } = await API.post('/authors', data)
    return response
  } catch (error) {
      console.log(error)
      throw error
  }
}

export const deleteAuthor = async (id) => {
  try {
    const { data: response } = await API.delete(`/authors/${id}`)
    return response
  } catch (error) {
      console.log(error)
      throw error
  }
}