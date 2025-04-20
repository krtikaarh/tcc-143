import axios from 'axios';

// Buat instance axios dengan URL dasar
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://notes-143-be-353267785618.uc.r.appspot.com/api/notes',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Layanan API untuk catatan
export const layananCatatan = {
  // Dapatkan semua catatan
  ambilSemuaCatatan: async () => {
    try {
      const response = await api.get('/notes');
      return response.data;
    } catch (error) {
      console.error('Error mengambil catatan:', error);
      throw error;
    }
  },

  // Dapatkan catatan berdasarkan ID
  ambilCatatanById: async (id) => {
    try {
      const response = await api.get(`/notes/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error mengambil catatan dengan id ${id}:`, error);
      throw error;
    }
  },

  // Buat catatan baru
  buatCatatan: async (dataCatatan) => {
    try {
      const response = await api.post('/notes', dataCatatan);
      return response.data;
    } catch (error) {
      console.error('Error membuat catatan:', error);
      throw error;
    }
  },

  // Perbarui catatan
  updateCatatan: async (id, dataCatatan) => {
    try {
      const response = await api.put(`/notes/${id}`, dataCatatan);
      return response.data;
    } catch (error) {
      console.error(`Error memperbarui catatan dengan id ${id}:`, error);
      throw error;
    }
  },

  // Hapus catatan
  hapusCatatan: async (id) => {
    try {
      const response = await api.delete(`/notes/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error menghapus catatan dengan id ${id}:`, error);
      throw error;
    }
  },
};

export default api;