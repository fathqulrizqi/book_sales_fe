import API from "../api"

export const getGenres = async () => {
  const { data } = await API.get('/genres')
  return data
}

export const createGenre = async (data) => {
  try {
    const data = await API.post('/genres', data)
    return response
  } catch (error) {
      console.log(error)
      throw error
  }
}

export const deleteGenre = async (id) => {
  try {
    const { data: response } = await API.delete(`/genres/${id}`)
    return response
  } catch (error) {
      console.log(error)
      throw error
  }
}