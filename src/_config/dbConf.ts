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

        console.log('Database connected');
    } catch (err) {
        console.log(err);
    }
};
