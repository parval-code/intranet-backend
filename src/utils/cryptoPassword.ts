import * as crypto from 'crypto-js';

export const stringToSHA256 = (password: string): string  => {
  const hash = crypto.SHA256(password);
  return hash.toString(crypto.enc.Hex);
};
