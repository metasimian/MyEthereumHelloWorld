var helloworld = artifacts.require("helloWorld");

module.exports = function(deployer) {
  deployer.deploy(helloworld);
};
