import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://fed-team.modyo.cloud/api/",
});

export const apiHelper = {
  get: async (url: string, params: any) => {
    try {
      const response = await apiClient.get(url, { params });
      return response.data;
    } catch (error) {
      console.error("Error making GET request:", error);
      throw error;
    }
  },
  post: async (url: string, data: any) => {
    try {
      const response = await apiClient.post(url, data);
      return response.data;
    } catch (error) {
      console.error("Error making POST request:", error);
      throw error;
    }
  },
};
