import * as faker from 'faker';

export const mocks = {
  sexes: {
    data: [
      {
        name: 'Men',
        code: 'M',
      },
    ],
  },
  roles: {
    data: [
      {
        name: 'administrator',
        description: 'role',
      },
    ],
  },
  countries: {
    data: [
      {
        name: faker.address.country(),
        acronym: faker.address.countryCode(),
      },
    ],
  },
  nationalities: {
    data: [
      {
        name: faker.address.country(),
        async country(app) {
          return app.service('countries').get(1);
        },
      },
    ],
  },
  persons: {
    data: [
      {
        names: faker.name.firstName(),
        firstSurname: faker.name.lastName(),
        secondSurname: faker.name.lastName(),
        birthDate: new Date(),
        cardId: faker.random.alphaNumeric(12),
        isPassport: false,
        async gender(app) {
          return app.service('sexes').get(1);
        },
        async nationality(app) {
          return app.service('nationalities').get(1);
        },
      },
    ],
  },
  permissions: {
    data: [
      {
        name: 'user_manager',
        description: 'user_manager',
        code: 'user_manager',
      },
      {
        name: 'permission',
        description: 'permission',
        code: 'permission',
      },
    ],
  },
  groups: {
    data: [
      {
        name: faker.name.prefix(),
        description: 'this text',
      },
      {
        name: faker.name.prefix(),
        description: 'this text',
      },
    ],
  },
  'permission-groups': {
    data: [
      {
        async group(app) {
          return app.service('groups').get(1);
        },
        async permission(app) {
          return app.service('permissions').get(1);
        },
      },
      {
        async group(app) {
          return app.service('groups').get(1);
        },
        async permission(app) {
          return app.service('permissions').get(2);
        },
      },
    ],
  },
  'user-permission-groups': {
    data: [
      {
        async user(app) {
          return await app.service('users').get(1);
        },
        async group(app) {
          return await app.service('groups').get(1);
        },
        async createdBy(app) {
          return await app.service('users').get(1);
        },
      },
    ],
  },
};

export async function configureMocks(app) {
  for (const service in mocks) {
    const data = mocks[service].data;
    for (const item of data) {
      for (const property in item) {
        if (typeof item[property] === 'function') {
          item[property] = await item[property](app);
        }
      }
      await app.service(service).create(item);
    }
  }
}
