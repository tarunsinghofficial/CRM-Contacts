import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getContacts = async (page, limit, sortBy, sortOrder) => {
  try {
    const response = await api.get(`/contacts`, {
      params: {
        page,
        limit,
        sort: sortBy,
        order: sortOrder,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const createContact = async (contactData) => {
  try {
    const response = await api.post('/contacts', contactData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const updateContact = async (id, contactData) => {
  try {
    const response = await api.put(`/contacts/${id}`, contactData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const deleteContact = async (id) => {
  try {
    const response = await api.delete(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};