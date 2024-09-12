import { get } from 'lodash';
import * as jwt from 'jsonwebtoken';
import config from '../../config/default';
import { BadRequest } from '../skeleton/services/errors';

const validateAuthTokenAccessMiddleware = () => (req, _res, next) => {
  try {
    const userAuth = get(req.headers, 'authtokenintranet');

    const userAuthFinish = userAuth.replace('Bearer ', '');
    const payload = jwt.verify(userAuthFinish as string, config.token.secretKey);
    if (get(payload, 'id', 0) || get(payload, 'tenantId', 0)) {
      req['user'] = payload;
      return next();
    } else {
      throw new BadRequest('Access Invalid Token');
    }
  }catch (e) {
    throw new BadRequest('Access Invalid Token');
  }
};

export default validateAuthTokenAccessMiddleware;
