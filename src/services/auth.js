import API from "../api";

export const login = async ({ email, password }) => {
  try {
    const { data } = await API.post("/login", { email, password });
    return data
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const logout = () => {
  try {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userInfo");
  } catch (error) {
    console.log(error);
    throw error;
  }
}