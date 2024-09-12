import { BadRequest } from '../../../skeleton/services/errors';

const setTokenHeader = () => async (_req, res, next) => {
  if (res.result) {
    res.header('authtokenintranet', res.result);
  }else {
    throw new BadRequest('Invalid Access');
  }
  next();
};

export default setTokenHeader;
