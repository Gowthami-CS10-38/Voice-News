import axios from "axios";
export function getNews(category = 'General') {
  const API_Key =`104364a3243f4341952519b17f7f67e2`;
  const API_EndPoint = `https://newsapi.org/v2/top-headlines?country=us&category=${category}`;
  
    return axios.get(`${API_EndPoint}&apiKey=${API_Key}`)
    
  }


