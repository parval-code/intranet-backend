import DepartmentsEntity from "../../departments/departments.entity";
import FileSystemDepartmentsEntity from "../fileSystemDepartments.entity";
import { getConnection } from "typeorm";
import { get, isEmpty, set } from 'lodash';


export const InsertValueInitialMiddleware = () => async (_req, res, next) => {
    try {
        const data = get(res.result, 'data', []);

        if(isEmpty(data)) {
            console.log("ENTRE")
            const connection = getConnection();
            const queryRunner = connection.createQueryRunner();

            const departments = await queryRunner.manager.getRepository(DepartmentsEntity)
                .createQueryBuilder('departments').getMany();

            const data = {};

            departments.map((item: any) => {
                set(data, item.id, []);
            });
            
            const dataInsert = await getConnection().createQueryBuilder()
                    .insert()
                    .into(FileSystemDepartmentsEntity)
                    .values({
                        fileSystem: data,
                        createdAt: new Date(),
                        updatedBy: '750eda71-bba3-46e2-b0bd-2667d61ce3d7',
                        updatedAt: new Date(),
                    })
                    .execute();

            console.log('data', dataInsert, 'data');
        }
        
    } catch(e) {
        console.log(e);
    }
  
    next();
};