import axios, { AxiosRequestConfig } from "axios";

export interface Response<T> {
    count: number;
    next: string | null;
    results: T[];
  }

const apiClient = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "248c58962c78405eb8c24168e3dec4eb"
    }
})

class APIClient<T>{
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig = {}) => apiClient.get<Response<T>>(this.endpoint, config)
      .then(res => res.data);

    get = (id: number | string) => apiClient.get<T>(this.endpoint + '/' + id)
        .then(res => res.data);
}

export default APIClient;