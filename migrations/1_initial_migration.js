const WavePortal = artifacts.require("WavePortal.sol");

module.exports = function (deployer) {
  deployer.deploy(WavePortal);
};
