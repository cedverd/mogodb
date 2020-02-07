const assert = require('assert'); 
const User = require('../src/user');

describe('Reading Records', () => {
	let joe;
	
    beforeEach((done) => {
        joe = new User({name:'Joe'});
        joe.save()
            .then(() => done());
    });

    it('Reading the USer name joe', (done) => {
        User.find({name: 'Joe'})
            .then((users) => {
                assert(joe._id.toString() === users[0]._id.toString());
                done();
            });
    });

    it('finding a user with a perticular ID', (done) => {
        User.findOne({_id:joe._id})
            .then((user) => {
                console.log(user);
                assert(user.name === 'Joe');
                done();
            });
    });
});