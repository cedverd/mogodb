const assert = require('assert'); 
const User = require('../src/user');

describe('Creating Records', () => {
    it('Saving the USer', (done) => {
        const joe = new User({name:'Joe'});
        joe.save()
            .then(() => {
                assert(!joe.isNew);
                done();
            });
    });
});