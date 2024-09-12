import { isEmpty, get } from "lodash";
import DepartmentsEntity from './../../departments/departments.entity';
import { getConnection } from "typeorm";

export const ListCategoriesAvaliablePermissionsMiddleware = () => async (req, res, next) => {
    try {
        const { id } = req.auth;
        const data = get(res.result, 'data', []);

        console.log(data);
        if (!isEmpty(data)) {
            const connection = getConnection();
            const queryRunner = connection.createQueryRunner();

            const departments = await queryRunner.manager.getRepository(DepartmentsEntity)
                .createQueryBuilder('departments').getMany();       
                
            console.log(id, '>>>>>>>>>>>hola<<<<<<<<<<<<<', data, departments)
        }
        
    } catch (e) {
        console.log(e);
    }
    next();
}