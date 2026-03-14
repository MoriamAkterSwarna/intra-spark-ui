import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// Auth APIs
export const authAPI = {
  register: (data) => api.post("/auth/register", data),
  login: (data) => api.post("/auth/login", data),
  adminLogin: (data) => api.post("/auth/admin/login", data),
};

// User APIs
export const userAPI = {
  getAll: (params) => api.get("/users", { params }),
  getById: (id) => api.get(`/users/${id}`),
  update: (id, data) => api.put(`/users/${id}`, data),
  getMatches: (params) => api.get("/users/matches", { params }),
  uploadProfilePhoto: (formData) =>
    api.post("/users/upload/profile", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  uploadGalleryPhoto: (formData) =>
    api.post("/users/upload/gallery", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  logout: () => api.post("/users/logout"),
};

// Interest APIs
export const interestAPI = {
  send: (receiverId) => api.post("/interests/send", { receiverId }),
  respond: (interestId, status) =>
    api.put("/interests/respond", { interestId, status }),
  getMy: () => api.get("/interests/my"),
};

// Message APIs
export const messageAPI = {
  send: (receiverId, message) =>
    api.post("/messages/send", { receiverId, message }),
  get: (userId) => api.get(`/messages/${userId}`),
  getConversations: () => api.get("/messages/conversations"),
};

// Admin APIs
export const adminAPI = {
  getUsers: (params) => api.get("/admin/users", { params }),
  deleteUser: (id) => api.delete(`/admin/user/${id}`),
  blockUser: (id) => api.put(`/admin/block/${id}`),
  getStats: () => api.get("/admin/stats"),
};

export default api;
