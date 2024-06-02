import axios from "axios";

const AccessToken = "";

export const getTrendMovies = async () => {
  const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;
  const params = {
    headers: {
      Authorization: `Bearer ${AccessToken}`,
    },
  };
  try {
    const response = await axios.get(url, params);

    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMoviesDetailsById = async (id, codeWord = "") => {
  const url = `https://api.themoviedb.org/3/movie/${id}${codeWord}?language=en-US`;
  const params = {
    headers: {
      Authorization: `Bearer ${AccessToken}`,
    },
  };
  try {
    const response = await axios.get(url, params);

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMoviesSearch = async (query, page = 1) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`;
  const params = {
    headers: {
      Authorization: `Bearer ${AccessToken}`,
    },
  };
  try {
    const response = await axios.get(url, params);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
