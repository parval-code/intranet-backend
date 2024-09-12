import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const table = new Table({
  name: 'BitacoraSIMV',
  columns: [
    {
      name: 'Id',
      type: 'int',
      isGenerated: true,
      isPrimary: true,
      generationStrategy: 'increment',
    },
    {
      name: 'TipoDocumento',
      type: 'varchar',
    },
    {
      name: 'Departamento',
      type: 'varchar',
    },
    {
      name: 'CreadoPor',
      type: 'varchar',
    },
    {
      name: 'FechaCreacion',
      type: 'date',
    },
    {
      name: 'Requerimiento',
      type: 'varchar',
    },
    {
      name: 'Estado',
      type: 'bit',
    },
  ],
});

export class BinnacleSIMV1675919289092 implements MigrationInterface {

  async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(table, true);
  }

  async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(table.name);
  }

}
