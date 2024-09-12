import { Response } from 'express';
import { httpCodes } from './ErrorCode';

type ResponseError = {
  code: number,
  message?: string,
  info?: string | string[],
};

export default class ResponseHandler {

  static sendError(res: Response, error: ResponseError): Response {
    const code = error.code ? error.code : httpCodes.SERVER_ERROR;
    return this.sendResponse(res, code, { message: error.info });
  }

  static sendResponse(res: Response, code: number, payload?: any): Response {
    if (typeof (code) === 'object') {
      return this.sendError(res, code);
    }

    return res.status(code).json(payload);
  }
}
