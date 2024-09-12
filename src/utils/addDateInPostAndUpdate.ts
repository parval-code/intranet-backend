import { set, get } from 'lodash';
import * as jwt from 'jsonwebtoken';
import config from '../../config/default';
import { momentInstanceV4 } from '../utils/momentInstance';

const addDateInPostAndUpdate = (req, _res, next) => {
  try {
    const userAuth = get(req.headers, 'authtokenintranet');

    if (userAuth || userAuth.startsWith('Bearer')) {
      const userAuthFinish = userAuth.replace('Bearer ', '');
      const payload: any = jwt.verify(userAuthFinish as string, config.token.secretKey);
      set(req.body, 'createdBy', payload.id);
      set(req.body, 'updatedBy', payload.id);
    }
  } catch(e: any) {
    console.log(e, 'Errors');
    // Handle the error appropriately, such as sending an error response.
  }

  set(req.body, 'createdAt', momentInstanceV4(new Date()));
  set(req.body, 'updatedAt', momentInstanceV4(new Date()));
  next();
};

export default addDateInPostAndUpdate;
