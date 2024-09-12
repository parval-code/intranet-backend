
export const getRelationsMiddleware = (relations: string[]) => async (req, _res, next) => {

  req.query = { relations, where: req.query };

  next();
};
