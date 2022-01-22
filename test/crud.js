const Crud = artifacts.require("Crud");

contract("Crud", function (/* accounts */) {

  let crud;

  before(async () => {
    crud = await Crud.deployed()
  })

  it('should deploy correclty', async function () {
    await Crud.deployed()
    return assert.isTrue(true)
  })

  it('should create an user', async () => {
    await crud.create('William')
    const user = await crud.read(1)
    
    console.log(user)
    assert.equal(user[0].toNumber(), 1, 'Wrong id')
    assert.equal(user[1], 'William', 'Name was not set correctly')
  })

  it('should update an user', async () => {
    await crud.update(1, 'Frankk')
    const user = await crud.read(1)
    assert.equal(user[0].toNumber(), 1)
    assert.equal(user[1], 'Frankk')
  })

  it('should NOT update a non-existing user', async () => {
    try {
      await crud.update(2, 'Maroc')
    } catch(error) {
      return assert.isTrue(error.message.includes('User does not exist'))
    }

    assert.fail('Should not reach here bro')
  })

  it('should delete an entry', async () => {
    try {
      await crud.destroy(1)
      await crud.read(1)
    } catch (error) {
      return assert.isTrue(error.message.includes('User does not exist'))
    }

    assert.fail('Should not reach here bro')
  })

  it('should fail to destroy non-existing user', async () => {
    try {
      await crud.read(999999)
    } catch (error) {
      return assert.isTrue(error.message.includes('User does not exist'))
    }

    assert.fail('Should not reach here bro')
  })

})
