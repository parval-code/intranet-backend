import { AxiosServices } from '../utils/AxiosServices';
import { BadRequest, InternalError } from '../skeleton/services/errors';
import IAppProvider from '../skeleton/services/IAppProvider';

interface ILoginParval {
  user: string;
  password: string;
}

export class Gateway {
  protected app: IAppProvider;
  protected url: String;
  protected parvalGateway: String;
  protected urlApiParval: String;
  protected urlSoap: String;
  protected urlUbiSRM: String;
  protected urlApiParvalProd: String;

  constructor(app: IAppProvider,
              url: string,
              urlApiParval?: string,) {
    this.url = url;
    this.app = app;
    this.urlApiParval = urlApiParval;
  }

  async authLoginParval(data: ILoginParval): Promise<any> {
    return await AxiosServices.post(`${this.url}/user/Login`, data)
        .then((response: any) => {
          return response.data;
        }).catch((reason) => {
          throw new BadRequest(reason.response.data.message);
        });
  }

  async getListExecutive(body: any): Promise<any> {
    const headers = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return await AxiosServices.post(`${this.urlApiParval}/WDame_ejecutivo`, body, headers)
        .then((response: any) => {
          return response.data;
        }).catch((reason) => {
          throw new InternalError(reason.response ? reason.response.data.errors
              || reason.response.data.info : reason.code);
        });
  }
}
