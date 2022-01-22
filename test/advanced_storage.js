const AdvancedStorage = artifacts.require("AdvancedStorage");

contract("AdvancedStorage", function (/* accounts */) {

  let advancedStorage

  before(async () => {
    advancedStorage = await AdvancedStorage.deployed()
  })

  it('should deploy correctly', async function () {
    await AdvancedStorage.deployed()
    return assert.isTrue(true)
  })

  it('should add an elemento to ids array', async () => {
    await advancedStorage.add(1)
    const value = await advancedStorage.ids(0)

    return assert.equal(value.toNumber(), 1, 'bro, wrong value')
  })

  it('should get an element of the ids array', async () => {
    await advancedStorage.add(20)

    const value = await advancedStorage.get(1)

    return assert.equal(value.toNumber(), 20, 'wrong value bro')
  })

  it('should get all elements of the ids array', async () => {
    const rawIds = await advancedStorage.getAll()
    const ids = rawIds.map(id => id.toNumber())

    return assert.deepEqual(ids, [1, 20], 'wrong value bro')
  })

  it('should return the length of the elements array', async () => {
    const length = await advancedStorage.length()
    assert.equal(length, 2, 'tamanho não é igual bro')
  })

})
