'use strict';

const expect = require("chai").expect;
const utils = require("../src/utils.js");
const { v4: uuidv4 } = require('uuid');

describe('utils', () => {
  let fakeDevelopers = [
    {id: uuidv4(), nombres_completos: "dev1"},
    {id: uuidv4(), nombres_completos: "dev2"},
    {id: uuidv4(), nombres_completos: "dev3"}
  ]
  const firstDeveloperID = fakeDevelopers[0].id;
  const secondDeveloperID = fakeDevelopers[1].id;

  context('delete By UUID', () => {
    it('should delete an object with the matched id if it exists  ', () => {
      const postDeleteDevelopers = fakeDevelopers.slice(1);
      fakeDevelopers = utils.deleteByUUID(firstDeveloperID, fakeDevelopers);
      expect(fakeDevelopers).to.be.eql(postDeleteDevelopers);
    })
  });

  context('update By UUID', () => {
    it('should update an object with the matched id if it exists  ', () => {
      const postDeveloperUpdate = {id: secondDeveloperID, nombres_completos: "Dev2Updated"};
      fakeDevelopers = utils.updateByUUID(secondDeveloperID,{nombres_completos: "Dev2Updated"},fakeDevelopers);
      expect(fakeDevelopers[0]).to.be.eql(postDeveloperUpdate);
    })
  });
});
