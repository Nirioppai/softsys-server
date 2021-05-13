const mongoose = require('mongoose');
const { DBURI } = process.env;

module.exports = async () => {
    try {
        await mongoose.connect(DBURI, {
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
