import { FactoryStatic, Seeder } from '../index';
import BinnacleSIMVEntity from './../../src/services/binnacleSIMV/binnacleSIMV.entity';

export default class BinnacleSIMVSeeder implements Seeder {
  async seed(factory:FactoryStatic): Promise<void> {
    await factory.get(BinnacleSIMVEntity).createMany(1);
  }
}
