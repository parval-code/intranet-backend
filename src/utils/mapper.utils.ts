import { clone } from 'lodash';

/**
 * Map an object and perform an action with the specified data type.
 * @param data
 * @param action
 * @param dataType
 */

export const mapper = async (data: any, action: any, dataType: string) => {
  const object = clone(data);

  for (const item in object) {
    if (typeof object[item] === 'object') {
      object[item] = await mapper(object[item], action, dataType);
    }

    if (typeof object[item] === dataType) {
      object[item] = await action(object[item]);
    }
  }
  return object;
};
