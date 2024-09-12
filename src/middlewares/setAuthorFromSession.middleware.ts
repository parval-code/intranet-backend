import { Request, Response, NextFunction } from 'express';
import { get, set } from 'lodash';

/**
 * Add the author of the request obtained from the
 * token to the body of the request.
 */
export const setAuthorFromSessionMiddleware = () =>
  async (req: Request | any, _res: Response, next: NextFunction) => {

    if (get(req, 'service.method') === 'create' || get(req, 'service.method') === 'update') {
    // We get the user in session.
      const userId = get(req, 'auth.user.id');
      const path = get(req, 'service.method') === 'create' ? 'createdBy' : 'updatedBy';

      if (Array.isArray(req.body)) {
        for (const item in get(req, 'body')) {
          set(req, `body[${item}].${path}`, userId);
        }

      } else {
        set(req, `body.${path}`, userId);
      }
    }
    next();
  };
