import { get, set } from 'lodash';

export const paginateMiddleware = () => async (req, _res, next) => {

  if (get(req, 'query.paginate')) {
    const page = get(req, 'query.page') || 1;
    const perPage = get(req, 'query.perPage') || 10;

    const offset = ((page * perPage) - perPage) || 0;

    set(req, 'query.skip', offset);
    set(req, 'query.take', perPage);

  }
  next();

};
