import { createService, registerService } from '../../skeleton/services';
import BinnacleSIMVMiddlewares from './binnacleSIMV.middlewares';
import BinnacleSIMVEntity from './binnacleSIMV.entity';

export default registerService<BinnacleSIMVEntity>(() => ({
  name: 'binnacle-SIMV',
  entity: 'binnacleSIMV',
  service: createService<BinnacleSIMVEntity>(BinnacleSIMVEntity),
  middlewares: BinnacleSIMVMiddlewares,
}));
