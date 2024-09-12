import { mapper } from './mapper.utils';
const AWS = require('aws-sdk');

export default class Cipher {
  protected kms: any;

  constructor() {
    this.kms = new AWS.KMS();
  }

  /**
   * Perform encryption through the Amazon KMS.
   * @param keyId
   * @param data
   */
  async encrypt (keyId: string, data: any) {
    const params = {
      KeyId: keyId,
      Plaintext: data,
    };

    const encrypted = await this.kms.encrypt(params).promise();
    return `hidden:${encrypted.CiphertextBlob.toString('base64')}`;
  }

  /**
   * First verify that the string is apt to decrypt,
   * then proceed to decrypt the data.
   * @param data
   */
  async decrypt(data: any) {
    if (data.startsWith('hidden:')) {
      const params = {
        CiphertextBlob: Buffer.from(data.split(':')[1], 'base64'),
      };

      const decrypted = await this.kms.decrypt(params).promise();
      return  decrypted.Plaintext.toString('utf-8');
    }
    return data;
  }

  /**
   *
   * @param object
   * @return object
   */
  async decryptObject(object: object) {
    return await mapper(object, this.decrypt.bind(this), 'string');
  }

  /**
   *
   * @param object
   * @return object
   */
  async encryptObject(object: object) {
    return await mapper(object, this.encrypt.bind(this), 'string');
  }
}
