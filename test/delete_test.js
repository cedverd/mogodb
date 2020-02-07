const assert = require('assert');
const User  = require('../src/user');


describe('Deleting Users', () => {
    beforeEach((done) => {
        joe = new User({name:'Joe'});
        joe.save()
            .then(() => done());
    });

    it('remove Model Instance', (done) => {
        joe.remove()
            .then(() => User.findOne({name: 'Joe'}))
            .then((user) => {
                assert(user === null);
            });
    });
    
    it('class method remove', (done) => {

    });
    it('class method findAndRemove', (done) => {

    });
    it('class method findByIdAndRemove', (done) => {

    });

});