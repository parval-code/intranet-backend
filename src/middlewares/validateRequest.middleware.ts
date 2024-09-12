import { Request, Response, NextFunction } from 'express';
import PayloadValidator from '../utils/payloadValidator.utils';
import { BadRequest } from '../skeleton/services/errors';

/**
 * Validate the fields expected in the request.
 * @param params
 * @param key
 */
export const validateRequest = (params: string[], key?: string) =>
  async (req: Request, _res: Response, next: NextFunction) => {
    const payloadValidate = new PayloadValidator(req);

    payloadValidate.validate(params);
    const errors = key ? payloadValidate.getErrorsArray(key) : payloadValidate.getErrors();

    // Verify if exist errors.
    if (errors) {
      throw new BadRequest(errors);
      return;
    }

    next();
  };
