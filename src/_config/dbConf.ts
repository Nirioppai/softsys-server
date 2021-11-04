const mongoose = require('mongoose');
const { DBURI } = process.env;

module.exports = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/hris', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Database is now connected...');
    } catch (err) {
        throw new Error('Faild to connect to the database');
    }
};
