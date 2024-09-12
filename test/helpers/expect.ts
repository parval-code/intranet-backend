import * as chai from 'chai';
const chaiAsPromised = require('chai-as-promised');
const sinonChai = require('sinon-chai');

chai.use(chaiAsPromised);
chai.use(sinonChai);

export const expect = chai.expect;
