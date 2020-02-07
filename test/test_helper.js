const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost/user_test');

before((done) => {
    mongoose.connection
    .once('open', () => {done();})
    .on('error', (error) => {
        console.warn('Warning', error);
    });
}); 
beforeEach((done) => {
    mongoose.connection.collections.users.drop( () => {
        console.log('Cleaning the old records');
        done();
    });
});