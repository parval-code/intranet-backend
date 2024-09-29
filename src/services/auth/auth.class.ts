import { IApplicationService } from '../../skeleton/services/utils';
import { getConnection } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import {isEmpty, set, get} from 'lodash';
import config from '../../../config/default';
import { BadRequest } from '../../skeleton/services/errors';
import UsersPermissionsEntity from '../usersPermissions/usersPermissions.entity';
import PersonsEntity from '../persons/persons.entity';
import AssignedUserGroupsEntity from '../assignedUserGroups/assignedUserGroups.entity';
import DepartmentsEntity from '../departments/departments.entity';
import IAppProvider from '../../skeleton/services/IAppProvider';

export default class AuthService implements IApplicationService<any> {
  constructor(protected app: IAppProvider) {}

  async create(data: Partial<any>): Promise<any> {
    try {

      const connection = getConnection();
      const queryRunner = connection.createQueryRunner();

      const userId = data.id ? 
      data.id : data.localAccountId

      let info: any = {};
      let permissions: any = [];
      let departments: any[] = [];

      if (!isEmpty(data) && data.id) {

        try {
          info = await queryRunner.manager
            .getRepository(PersonsEntity)
            .createQueryBuilder('persons')
            .leftJoinAndSelect('persons.area', 'area')
            .leftJoinAndSelect('persons.location', 'location')
            .andWhere('persons.userId = :id', { id: userId }).getMany();

          departments = await queryRunner.manager
            .getRepository(DepartmentsEntity)
            .createQueryBuilder('departments')
            .andWhere('departments.manager = :id', { id: userId }).getMany();  

          permissions = await queryRunner.manager
            .getRepository(UsersPermissionsEntity)
            .createQueryBuilder('usersPermissions')
            .andWhere('usersPermissions.userId = :id', { id: userId }).getMany();

          const group: AssignedUserGroupsEntity[] = await queryRunner.manager
          .getRepository(AssignedUserGroupsEntity)
          .createQueryBuilder('assignedUserGroups')
          .andWhere('assignedUserGroups.userId = :id', { id: userId }).getMany();

          if(!isEmpty(group)) {
            set(data, 'group', group[0].group);
          } else {
            set(data, 'group', []);
          }
            

          if(!isEmpty(departments)) {
            set(data, 'departmentName', get(departments[0], 'name', ''));
            set(data, 'departmentId', get(departments[0], 'id', ''));
            set(data, 'manager', get(departments[0], 'manager', ''));
            set(data, 'departmentIsTrue', true);
          }  

          if(!isEmpty(info)) {
            if(!isEmpty(info[0].area.manager)) {
              try {
                const infoManager: any = await queryRunner.manager
                .getRepository(PersonsEntity)
                .createQueryBuilder('persons')
                .andWhere('persons.userId = :id', { id: info[0].area.manager }).getMany();

                set(info[0].area, 'infoManager', {
                  urlImage: get(infoManager[0], 'urlImage', ''),
                  name: get(infoManager[0], 'name', ''),
                  jobTitle: get(infoManager[0], 'jobTitle', ''),
                });
                console.log(infoManager);
              } catch(e) {
                console.log(e);
              }
            }
            set(data, 'urlImage', get(info[0], 'urlImage', ''));
            set(data, 'area', get(info[0], 'area', ''));
            set(data, 'admissionDate', get(info[0], 'admissionDate', ''));
            set(data, 'birthdate', get(info[0], 'birthdate', ''));
          }

          if(!isEmpty(permissions)) {
            set(data, 'permissions', get(permissions[0], 'permissions', ''));
          }
        } catch(e) {
          info = {};
          console.log(e);
        }
      }
      
      if (data) {
        return jwt.sign(data, config.token.secretKey);
      }
    }catch (e) {
      throw new BadRequest('Invalid info for users');
    }
    throw new BadRequest('Invalid info for users');
  }

  async delete(_id: number | string, _query?: any): Promise<any> {
    return undefined;
  }

  async find(_query: any = {}): Promise<any[]> {
    return undefined;
  }

  async get(_id: number): Promise<any> {
    return undefined;
  }

  async update(_id: number | string, _data: Partial<any>, _query: any): Promise<any> {
    return undefined;
  }

}
