import { apiWithAuth, apiPublic } from './axios';

// API tanpa token, misal login/register
export const loginUser = async (credentials) => {
  const res = await apiPublic.post('/login', credentials);
  // Simpan token ke localStorage jika ada
  if (res.data.token) {
    localStorage.setItem('token', res.data.token);
  }
  return res.data;
};

export const registerUser = async (userData) => {
  const res = await apiPublic.post('/register', userData);
  return res.data;
};

// API catatan (butuh token)
export const layananCatatan = {
  ambilSemuaCatatan: async () => {
    const res = await apiWithAuth.get('/notes');
    return res.data;
  },
  ambilCatatanById: async (id) => {
    const res = await apiWithAuth.get(`/notes/${id}`);
    return res.data;
  },
  buatCatatan: async (data) => {
    const res = await apiWithAuth.post('/notes', data);
    return res.data;
  },
  updateCatatan: async (id, data) => {
    const res = await apiWithAuth.put(`/notes/${id}`, data);
    return res.data;
  },
  hapusCatatan: async (id) => {
    const res = await apiWithAuth.delete(`/notes/${id}`);
    return res.data;
  },
};
