const db = require("../config/connection");
const { User, Team, Matchup } = require("../models");
const userSeeds = require("./userSeedData");
const teamSeeds = require("./teamSeedData");
// const matchupSeeds = require("./matchupSeedData");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    await cleanDB();

    await User.insertMany(userSeeds);

    await Team.insertMany(teamSeeds);

    // await Matchup.insertMany(matchupSeeds);

    console.log("All seeds successfully inserted!");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
