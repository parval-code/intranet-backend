import { Response } from 'express';
import ResponseHandler from '../../utils/ResponseHandler';
import { BadRequest } from './../skeleton/services/errors';
import { buildRawError } from '../../utils/ErrorCode';
import IAppProvider from './../skeleton/services/IAppProvider';
import { getConnection } from 'typeorm';
import PersonsEntity from './../services/persons/persons.entity';
import { isEmpty, get } from 'lodash';
import CreateTemplateEmail from '../utils/generateTemplateEmail';
import { sendMessageForEmail } from '../utils/sendEmail';
// import config from '../../config/default';
import AssignedUserGroupsEntity from './../services/assignedUserGroups/assignedUserGroups.entity';

export const VerificateEnabledGroup = (listGroup: string[], verifyGroup: string[]) => {
    return listGroup.some((role: any) => verifyGroup.includes(role));
};


export const SendEmailNewFoldersHandlers = (_app: IAppProvider) =>
  async (req: any | any, res: Response) => {
    try {
      const { departament, grupos, name }: any = req.body;
      const connection = getConnection();
      const queryRunner = connection.createQueryRunner();
      console.log({ departament, grupos, name })
      if (departament && grupos) {

        const persons = await queryRunner.manager
            .getRepository(PersonsEntity)
            .createQueryBuilder('persons')
            .andWhere('persons.area = :id', { id: departament }).getMany();
        
        if (!isEmpty(persons)) {
            const templateContentClient = await CreateTemplateEmail({ name });
                await Promise.all(persons.map(async (person: PersonsEntity) => {
                  if (isEmpty(grupos)) {
                    await sendMessageForEmail({
                      email: process.env.NODE_ENV === 'production' ? person.email : 'jvargas@parval.com.do',
                      subject: 'Confirmación de Carpeta de Archivos',
                      message: 'Confirmación de Carpeta de Archivos',
                      template: templateContentClient,
                    });
                  } else {
                    const assignedUserGroups = await queryRunner.manager
                      .getRepository(AssignedUserGroupsEntity)
                      .createQueryBuilder('assignedUserGroups')
                      .andWhere('assignedUserGroups.userId = :id', { id: person.userId })
                      .getOne();
      
                    if (!isEmpty(assignedUserGroups)) {
                      if (VerificateEnabledGroup(get(assignedUserGroups, 'group', ['']), grupos)) {
                        await sendMessageForEmail({
                          email: process.env.NODE_ENV === 'production' ? person.email : 'jvargas@parval.com.do', 
                          subject: 'Confirmación de Carpeta de Archivos',
                          message: 'Confirmación de Carpeta de Archivos',
                          template: templateContentClient,
                        });
                      }
                    }
                }
            }));
        }

        ResponseHandler.sendResponse(res, 200, {
            data: {
              send: true
            },
          });
      } else {
        throw new BadRequest('Invalid params or not have Permissions');
      }
    } catch (e) {
      ResponseHandler.sendResponse(res,e.code, buildRawError(e));
    }
  };
