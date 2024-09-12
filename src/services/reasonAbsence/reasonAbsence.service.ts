import { createService, registerService } from '../../skeleton/services';
import ReasonAbsenceMiddlewares from './reasonAbsence.middleware';
import ReasonAbsenceEntity from './reasonAbsence.entity';

export default registerService<ReasonAbsenceEntity>(() => ({
  name: 'reason-absence',
  entity: 'reasonAbsence',
  service: createService<ReasonAbsenceEntity>(ReasonAbsenceEntity),
  middlewares: ReasonAbsenceMiddlewares,
}));
