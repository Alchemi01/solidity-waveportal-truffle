const { expect } = require("chai");

const WavePortal = artifacts.require("WavePortal")


describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
   
    const waveportal = await WavePortal.new()

    //expect(await greeter.greet()).to.equal("Hello, world!");

   
    //await greeter.setGreeting("Hola, mundo!");

    
    //expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
