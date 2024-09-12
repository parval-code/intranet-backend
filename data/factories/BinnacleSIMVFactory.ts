import { define, FactoryStatic } from '../index';
import { getConnection } from 'typeorm';
import BinnacleSIMVEntity from 'services/binnacleSIMV/binnacleSIMV.entity';

const data = [
  {
    documentType: 'Realizado',
    department: 'contabilidad',
    createdBy: 'hdhdhhsshshhhhs',
    createdAt: new Date(),
    requirements: 'qwhejsksnd',
    status: true
  },
];

define(BinnacleSIMVEntity, async (
    _faker: Faker.FakerStatic,
    _factory: FactoryStatic,
    count?: number)
    : Promise<BinnacleSIMVEntity> => {
  const entity = new BinnacleSIMVEntity();
  entity.documentType = data[count as number].documentType;
  entity.department = data[count as number].department;
  entity.createdBy = data[count as number].createdBy;
  entity.requirements = data[count as number].requirements;
  entity.status = data[count as number].status;
  return entity;
},     getConnection() as any);
