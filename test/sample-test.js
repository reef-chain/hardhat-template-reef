const { assert } = require("chai");

describe("Greeter", function() {
  it("Should return the new greetings value once changed", async function() {
    const Greeter = await hre.reef.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello world");

    assert.equal(await greeter.greet(), "Hello world");
    await greeter.setGreeting("This is a new greeting");
    assert.equal(await greeter.greet(), "This is a new greeting");
  });
});
