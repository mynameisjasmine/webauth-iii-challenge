const { validateUser} = require('./user-helpers.js');


describe ('users helpers', () => {
describe('validateUser', () => {
    it('should fail when missing username and password')
//Arrange: setup the world for test
const invalidUser = {};
const expected = true;

//Act: execute the sysytem under test (SUT) => validateUser method
const actual = validateUser(invalidUser)

//Assert: we check the result
expect(actual.isSuccessful).toBe(expected) //matchers
})

})