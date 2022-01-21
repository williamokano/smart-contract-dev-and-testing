const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", function (/* accounts */) {
  it('it should deploy correctly', async function () {
    await SimpleStorage.deployed()
    return assert.isTrue(true)
  })

  it('should set the data variable', async function () {
    const simpleStorage = await SimpleStorage.deployed()
    await simpleStorage.set('a whole new message')

    const data = await simpleStorage.get()
    return assert.equal(data, 'a whole new message')
  })
})
