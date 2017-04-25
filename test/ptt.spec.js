/*global describe, it, before */

import chai from 'chai';
import Library from '../lib/ptt.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my library',  () => {
  before(() => {
    lib = new PTT();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('PTT');
    });
  });
});
