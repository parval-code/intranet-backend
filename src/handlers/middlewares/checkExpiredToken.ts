import { get } from 'lodash';
import * as jwt from 'jsonwebtoken';
import config from '../../../config/default';
import ResponseHandler from '../../../utils/ResponseHandler';
// import jwt from "jsonwebtoken";

const CheckExpiredTokenMiddleware = () => (req, res, next) => {
  try {
    const userAuth = get(req.headers, 'authtokenintranet');
    const userAuthFinish = userAuth.replace('Bearer ', '');

    const payload: any = jwt.verify(userAuthFinish as string, config.token.secretKey);
    const expirationTime = payload.exp * 1000;

    if (expirationTime < Date.now()) {
      ResponseHandler.sendResponse(res, 200, {
        token: false,
        message: 'Token expired',
        code: 'tokenExpired',
      });
    } else {
      if (!get(payload, 'rif')) {
        ResponseHandler.sendResponse(res, 200, {
          token: false,
          message: 'Token Invalid',
          code: 'tokenInvalid',
        });
      }
      req['user'] = payload;
      req['token'] = payload.token;
      next();
    }
  } catch (e) {
    ResponseHandler.sendResponse(res, 200, {
      token: false,
      message: 'Token expired',
      code: 'tokenExpired',
    });
  }

};

export default CheckExpiredTokenMiddleware;
