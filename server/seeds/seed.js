const db = require("../config/connection");
const { User, Team, Debate } = require("../models");
const userSeeds = require("./userSeedData");
const teamSeeds = require("./teamSeedData");
// const debateSeeds = require("./debateSeedData");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    await cleanDB('User', 'users');

    await cleanDB('Team','teams');

    // await cleanDB('Debate','debates')

    await User.insertMany(userSeeds);

    await Team.insertMany(teamSeeds);

    // await Debate.insertMany(debateSeeds);

    console.log("All seeds successfully inserted!");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
