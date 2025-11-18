import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import { BASE_URL, INTEGRATIONS } from "../constants/api-constants";

export function useAPIService() {
  const { getToken } = useAuth();

  async function getAPI() {
    const token = await getToken();
    return axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  function handleError(error) {
    return {
      success: false,
      error: axios.isAxiosError(error)
        ? error.response?.data?.error || error.message
        : "Unknown error occurred",
    };
  }
  //INTEGRATIONS

  async function getConnectionsList() {
    try {
      const api = await getAPI();
      const res = await api.get(INTEGRATIONS.LIST_CONNECTION);
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async function connectWithProvider(id) {
    try {
      const api = await getAPI();
      const res = await api.post(INTEGRATIONS.CREATE_TOKEN, { providerId: id });
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  async function getProvidersList() {
    try {
      const api = await getAPI();
      const res = await api.get(INTEGRATIONS.PUBLIC_LIST_INTEGRATIONS);
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async function deleteUserConnection(id) {
    try {
      const api = await getAPI();
      const res = await api.delete(`${INTEGRATIONS.DELETE_CONNECTION}/${id}`);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  return {
    //INTEGRATIONS
    getConnectionsList,
    connectWithProvider,
    deleteUserConnection,
    getProvidersList,
  };
}
