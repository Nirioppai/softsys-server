import adminSeed from './adminSeed';

async function seed() {
    // all seed will go in here
    await adminSeed();
}

// initialize seed
seed();
