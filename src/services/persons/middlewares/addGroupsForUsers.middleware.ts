import { get, isEmpty, set } from 'lodash';
import { getConnection } from "typeorm";
import AssignedUserGroupsEntity from "../../assignedUserGroups/assignedUserGroups.entity";

export const AddGroupsForUsersMiddleware = () => async (_req, res, next) => {
    try {
        const data = get(res.result, 'data', []);
        
        if (!isEmpty(data)) {
            const connection = getConnection();
            const userIds = data.map((user: any) => user.userId); // Obtener todos los userIds del array 'data'

            // Hacer una sola consulta para obtener todos los grupos de usuarios
            const assignedUserGroups = await connection
                .getRepository(AssignedUserGroupsEntity)
                .createQueryBuilder('assignedUserGroups')
                .where('assignedUserGroups.userId IN (:...userIds)', { userIds }) // Consulta en bloque
                .getMany();

            // Crear un índice en memoria de userId -> grupos
            const groupsMap = assignedUserGroups.reduce((acc, group) => {
                acc[group.userId] = group.group;
                return acc;
            }, {});

            // Asignar los grupos a los usuarios en 'data'
            data.forEach((user: any) => {
                const userGroup = get(groupsMap, user.userId, []);
                set(user, 'group', userGroup);
            });
        }
    } catch (e) {
        console.log(e);
    }
    next();
};
