import { createService, registerService } from '../../skeleton/services';
import FileSystemDepartmentsMiddlewares from './fileSystemDepartments.middleware';
import FileSystemDepartmentsEntity from './fileSystemDepartments.entity';

export default registerService<FileSystemDepartmentsEntity>(() => ({
  name: 'file-system-departments',
  entity: 'fileSystemDepartments',
  service: createService<FileSystemDepartmentsEntity>(FileSystemDepartmentsEntity),
  middlewares: FileSystemDepartmentsMiddlewares,
}));
