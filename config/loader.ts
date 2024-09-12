import { merge } from 'lodash';
import defaultConfig from './default';

/**
 * Load config
 * @returns {any}
 */
const loadConfig = () => {
  const env = process.env.NODE_ENV || 'default';

  if (env) {
    const config = require(`./${env}`)['default'];

    return merge(defaultConfig, config);
  }

  return defaultConfig;
};

export default loadConfig();
