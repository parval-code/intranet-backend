import IAppProvider from '../skeleton/services/IAppProvider';
import ResponseHandler from '../../utils/ResponseHandler';
import config from '../../config/default';
import * as jwt from 'jsonwebtoken';
import { BadRequest } from '../skeleton/services/errors';

interface DataUserInterface {
  apellido: string;
  bvrd_ejecutivo: string;
  correo: string;
  correo_ejecutivo: string;
  id_cliente: string;
  nombre: string;
  nombre_ejecutivo: string;
  rif: string;
  rif_traspaso: string;
  siv_ejecutivo: string;
  telefono: string;
  telefono_ejecutivo: string;
  token: string;
}

export const AuthLoginClients = (app: IAppProvider) =>
    async (req: any, res: any) => {
      try {
        const { user, password } = req.body;

        if (user && password) {
          const validate = await app.get('gateway').authLoginParval({
            user,
            password,
          });

          if (validate.message === 'OK') {
            const dataUser: DataUserInterface = await app.get('gateway')
                .getUserForToken(validate.token);

            const dataConvert = {
              lastName: dataUser.apellido,
              executiveBvrd: dataUser.bvrd_ejecutivo,
              email: dataUser.correo,
              executiveEmail: dataUser.correo_ejecutivo,
              clientId: dataUser.id_cliente,
              name: dataUser.nombre,
              executiveName: dataUser.nombre_ejecutivo,
              rif: dataUser.rif,
              rifTransfer: dataUser.rif_traspaso,
              executiveSiv: dataUser.siv_ejecutivo,
              phone: dataUser.telefono,
              executivePhone: dataUser.telefono_ejecutivo,
              token: validate.token,
            };
            const dataAuth = jwt.sign(dataConvert, config.token.secretKey,
                                      { expiresIn: config.token.tokenExpiration });
            ResponseHandler.sendResponse(res, 200, dataAuth);
          }
          ResponseHandler.sendResponse(res, 200, new BadRequest('Invalid password'));
        }
      } catch (e) {
        ResponseHandler.sendResponse(res, 200, new BadRequest(['Invalid password']));
      }
    };
