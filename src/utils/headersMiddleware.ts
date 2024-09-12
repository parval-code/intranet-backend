import { NextFunction, Response } from 'express';
import ResponseHandler from './../../utils/ResponseHandler';
import { buildRawError, httpCodes } from './../../utils/ErrorCode';
import config from './../../config/default';
import * as jwt from 'jsonwebtoken';
import { get } from 'lodash';

export const headersMiddleware = (): any => (
  request: any,
  response: Response,
  next: NextFunction,
) => {
  const userAuth = get(request.headers, 'authtokenintranet');
  try {
    if (userAuth) {
      const userAuthFinish = userAuth.replace('Bearer ', '');
      request.auth = jwt.verify(userAuthFinish as string, config.token.secretKey);
  
    } else {
      ResponseHandler.sendError(
        response,
        buildRawError({ code:httpCodes.UNAUTHORIZED,
          message:'don\'t have provided headers X-Service or X-GatewayUser' }));
  
    }
  } catch(e) {
    console.log(e);
  }
  next();
};
