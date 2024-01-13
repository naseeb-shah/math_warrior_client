import axios from "axios";

const baseurl = "https://math-warrior-server-b3je.vercel.app/math/"

export const getToken = () => {
  return localStorage.getItem("token");
};

export const registerUser = async (data) => {
  try {
    const res = await axios.post(`${baseurl}auth/register`, data);

    return res.data.data;
  } catch (e) {
    console.log(e);
  }
};
export const logIn = async (data) => {
  try {
    const res = await axios.post(`${baseurl}auth/login`, data);
    const result = res.data.data;
    localStorage.setItem("token", result.token);
    localStorage.setItem("username",result.user.username)
    
    return result;
  } catch (e) {
    console.log(e);
  }
};

export const getProblem = async (num, type, digit, correct) => {
  try {
    const url = `${baseurl}problem/${type}/${num}/${digit}/${correct}`;
    console.log(url);
    const token = getToken();

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const data = await axios.get(url, config);
    
    return data.data.data;
  } catch (e) {
    console.error(e);
  }
};

export const wrongProblem = async (problem) => {
  try {
    const url = `${baseurl}problem/wrong`;
    
    const token = getToken();

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const data = await axios.post(url, problem, config);
    return data.data.data;
  } catch (e) {
    console.error(e);
  }
};

export const getProfile=async()=>{
  try{
    const url = `${baseurl}problem/profile`;
    
    const token = getToken();

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const data = await axios.get(url, config);
    
    return data.data.data;

  }catch(e){

  }
}