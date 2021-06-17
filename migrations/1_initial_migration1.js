var Migrations = artifacts.require("./Migrations1.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};