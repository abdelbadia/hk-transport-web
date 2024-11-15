import axios from 'axios';
//process.env.REACT_APP_API_URL || 
const API_URL = 'https://hktransportapi-dvfvanhgeedmafak.canadacentral-01.azurewebsites.net/api/clients';
//const API_URL = 'http://localhost:5097/api/clients';


export const getClients = async () => {
    console.log("URL API utilisée :", process.env.REACT_APP_API_URL);
    console.log("URL API utilisée API_URL :", API_URL);
    return await axios.get(API_URL);
};

export const addClient = async (client) => {
    return await axios.post(API_URL, client);
};

// Récupère tous les clients
export const getAllClients = async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des clients :', error);
      throw error;
    }
  };
  
  // Récupère un client spécifique par son ID
  export const getClientById = async (client_id) => {
    try {
      const response = await axios.get(`${API_URL}/${client_id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération du client ${client_id} :`, error);
      throw error;
    }
  };
  
  // Ajoute un nouveau client
  export const createClient = async (clientData) => {
    try {
      const response = await axios.post(API_URL, clientData);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création du client :', error);
      throw error;
    }
  };
  
  // Met à jour un client existant
  export const updateClient = async (client_id, updatedData) => {
    try {
      const response = await axios.put(`${API_URL}/${client_id}`, updatedData);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour du client ${client_id} :`, error);
      throw error;
    }
  };
  
  // Supprime un client par son ID
  export const deleteClient = async (client_id) => {
    try {
      const response = await axios.delete(`${API_URL}/${client_id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la suppression du client ${client_id} :`, error);
      throw error;
    }
  };
  
  export default {
    getClients,
    addClient,
    getAllClients,
    getClientById,
    createClient,
    updateClient,
    deleteClient,
  };