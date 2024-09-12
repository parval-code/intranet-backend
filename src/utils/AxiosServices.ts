import axios from 'axios';

export class AxiosServices {

  static get(url: string, data?: any) {

    return axios.get(url, data);
  }

  static post(url: string, body:any, headers?: any) {

    return axios.post(url, body, headers);

  }

  static put(url: string, body:any) {

    return axios.put(url, body);
  }

  static delete(url: string) {

    return axios.delete(url);
  }

}
