import { Response } from 'express';
import ResponseHandler from '../../utils/ResponseHandler';
import { BadRequest } from '../skeleton/services/errors';
import { buildRawError } from '../../utils/ErrorCode';
import IAppProvider from '../skeleton/services/IAppProvider';
import { getConnection } from 'typeorm';
import AssignedUserGroupsEntity from './../services/assignedUserGroups/assignedUserGroups.entity';
import { isEmpty } from 'lodash';

export const ChangesGroupPersonsHandlers = (_app: IAppProvider) =>
  async (req: any | any, res: Response) => {
    try {
      const { personId, groups }: any = req.body;
      const connection = getConnection();
      const queryRunner = connection.createQueryRunner();

      if (personId && groups) {

        const persons = await queryRunner.manager
            .getRepository(AssignedUserGroupsEntity)
            .createQueryBuilder('assignedUserGroups')
            .andWhere('assignedUserGroups.userId = :id', { id: personId }).getMany();
        
        if(isEmpty(persons)) {
          await getConnection().createQueryBuilder()
            .insert()
            .into(AssignedUserGroupsEntity)
            .values({
              userId: personId,
              group: groups
            }).execute();
        } else {
          await getConnection()
                .createQueryBuilder()
                .update(AssignedUserGroupsEntity)
                .set({ group: groups })
                .whereInIds(persons[0].id)
                .execute();
        }
        ResponseHandler.sendResponse(res, 200, {
          data: {
            add: true
          },
        });
      } else {
        throw new BadRequest('Invalid params or not have Permissions');
      }
    } catch (e) {
      ResponseHandler.sendResponse(res,e.code, buildRawError(e));
    }
  };
