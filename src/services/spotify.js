import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
});

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('spotifyToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export const getFollowedArtists = async () => {
  const response = await api.get('me/following?type=artist');
  return response.data.artists.items;
};

export const unfollowArtist = async (artistId) => {
  await api.delete(`me/following?type=artist&ids=${artistId}`);
};