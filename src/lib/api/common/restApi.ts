import axios, { type AxiosResponse } from "axios";
import { PUBLIC_API_PATH } from '$env/static/public'
import type { PaginationResults } from "$lib/types";

class Client {
    protected baseUrl: string = "";
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }
    get(path: string) {
        return axios.get(`${this.baseUrl}${path}`)
    }
    post(path: string, params: any = {}) {
        return axios.post(`${this.baseUrl}${path}`, params)
    }
    put(path: string, params: any = {}) {
        return axios.put(`${this.baseUrl}${path}`, params)
    }
    delete(path: string) {
        return axios.delete(`${this.baseUrl}${path}`)
    }
}


export interface SearchOptions {
    page?: number;
    pageSize?: number;
    query?: string;
    qs?: any;
    preloads?: string[];
}




export type SearchResponse<T> = Promise<AxiosResponse<PaginationResults<T>>>
export type ApiReponse<T> = Promise<AxiosResponse<T>>


export default class RestApi<T> {
    protected client: Client;
    protected baseUrl: string;
    protected path: string;
    protected only: string[];

    constructor(baseUrl: string, rootUrl: string = PUBLIC_API_PATH, only: string[] = ["get", "create", "update", "delete", "list"]) {

        this.only = only;
        this.path = baseUrl;
        this.baseUrl = `${rootUrl}${baseUrl}`;
        this.client = new Client(this.baseUrl);
    }


    update(id: string, params: any) : ApiReponse<T>  {
        if (!this.only.includes("update")) throw new Error("Method not allowed")
        return this.client.put(`/${id}`, params)
    }

    create(params: any) : ApiReponse<T> {
        if (!this.only.includes("create")) throw new Error("Method not allowed")
        return this.client.post("/", params)
    }

    get(id: string, preloads: string[] = []) : ApiReponse<T>   {
        if (!this.only.includes("get")) throw new Error("Method not allowed")
        return this.client.get(`/${id}?preloads=${preloads.join(',')}`)
    }

    delete(id: any) {
        if (!this.only.includes("delete")) throw new Error("Method not allowed")
        return this.client.delete(`/${id}`)
    }

    search(options: SearchOptions) : SearchResponse<T>  {
        let page = options.page || 1;
        let pageSize = options.pageSize || 10;
        let query = options.query || 10;
        let qs = Object.keys(options.qs || {}).map((key) => {
            return `${key}=${options.qs[key]}`
        }).join("&");
        let preloads = (options.preloads || []).join(',');

        return this.client.get(`/?page=${page}&page_size=${pageSize}&query=${query}&preloads=${preloads}&${qs}`)
    }

    list(query: string = "", pageSize: number = 50, page: number = 1, preloads: string[] = []) : SearchResponse<T>  {
        if (!this.only.includes("list")) throw new Error("Method not allowed")
        return this.client.get(`/?page=${page}&page_size=${pageSize}&query=${query}&preloads=${preloads.join(',')}`)
    }
}


export class UntypedRestApi extends RestApi<any> {}


