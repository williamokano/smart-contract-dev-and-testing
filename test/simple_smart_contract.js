const SimpleSmartContract = artifacts.require("SimpleSmartContract");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("SimpleSmartContract", function (/* accounts */) {
  it('should deploy correcly', async function () {
    const simpleSmartContract = await SimpleSmartContract.deployed()
    return assert.isTrue(simpleSmartContract.address != '')
  })
})
