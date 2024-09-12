import { buildApp } from '../../src/app';
import config from '../../config/loader';
import { configureMocks } from './mocks';
import { getConnection } from 'typeorm';
import * as request from 'supertest';

/**
 * Tables to clean up after each test
 * Keep the tables in a dependency order.
 * If one table depends from another, it should be above the parent table.
 */
const tables = [
  'personal_references',
  'person_jobs',
  'municipalities',
  'additional_information_of_persons',
  'civil_status',
  'person_contacts',
  'contact_types',
  'person_address',
  'provinces',
  'branch_office',
  'dates_of_payments',
  'companies',
  'days_of_payments',
  'banks',
  'user_permission_group',
  'users',
  'persons',
  'permission_groups',
  'nationalities',
  'permissions',
  'groups',
  'roles',
  'countries',
  'sexes',
];

/**
 * Function to be run at the beginning of each test
 * @returns {Promise<void>}
 */
export async function setupEach() {
  // Create app
  this.app = await buildApp(config);
  // Create client (for fully-httpd requests)
  this.client = request(this.app);
  // Configure mocks
  await configureMocks(this.app);
  // Set user for tests
  this.session = (await this.client.post('/login').send({
    username: 'test',
    password: '123456',
  })).body;
}

/**
 * Function to be run at the end of each test
 * @returns {Promise<void>}
 */
export async function shutdownEach() {
  const connection = getConnection();
  for (const table of tables) {
    const repository = connection.getRepository(table);
    await repository.delete({});
  }
  await connection.dropDatabase();
  // Close connection (so the app can connect on the next test)
  await connection.close();
}
