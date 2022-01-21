const AdvancedStorage = artifacts.require("AdvancedStorage");

contract("AdvancedStorage", function (/* accounts */) {
  it('should deploy correctly', async function () {
    await AdvancedStorage.deployed()
    return assert.isTrue(true)
  })

  it('should add an elemento to ids array', async () => {
    const advancedStorage = await AdvancedStorage.deployed()

    await advancedStorage.add(1)
    const value = await advancedStorage.ids(0)

    return assert.equal(value.toNumber(), 1, 'bro, wrong value')
  })

  it('should get an element of the ids array', async () => {
    const advancedStorage = await AdvancedStorage.deployed()

    await advancedStorage.add(20)

    const value = await advancedStorage.get(1)

    return assert.equal(value.toNumber(), 20, 'wrong value bro')
  })

  it('should get all elements of the ids array', async () => {
    const advancedStorage = await AdvancedStorage.deployed()

    const rawIds = await advancedStorage.getAll()
    const ids = rawIds.map(id => id.toNumber())

    return assert.deepEqual(ids, [1, 20], 'wrong value bro')
  })

})
