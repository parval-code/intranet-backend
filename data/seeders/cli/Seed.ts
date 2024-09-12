import { loadFactories, loadSeeders } from './Seeders';
import { createConnection } from 'typeorm';
import config from '../../../config/loader';

const factoriesDir = `${__dirname}/../../factories/*Factory{.js,.ts}`;
const seedersDir = `${__dirname}/../*Seeder{.js,.ts}`;

async function runSeeders(): Promise<void> {
  // Connection Database
  await createConnection(config.database);
  loadFactories(factoriesDir);
  console.log('[+] Loaded factories: ');
  await loadSeeders(seedersDir);
}

runSeeders().then(() => {
  console.log('[+] Entities seeded successfully');
  process.exit(0);
}).catch((error: Error) => {
  console.log('[*] Error seeding entities:');
  console.log(error);
  process.exit(0);
});
