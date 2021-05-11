const { adminAccount } = require('./adminSeed');

async function seed() {
    await adminAccount();
}

// initialize seed
seed();