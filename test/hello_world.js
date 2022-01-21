const HelloWorld = artifacts.require("HelloWorld");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("HelloWorld", function (/* accounts */) {
  it('should deploy correcly', async function () {
    await HelloWorld.deployed()
    return assert.isTrue(true)
  })

  it('should be hello', async function () {
     const contract = await HelloWorld.deployed()
     const helloResponse = await contract.hello()
     assert.isTrue(helloResponse == 'Hello world')
  })
})
