const mongoose = require('mongoose');
const models = require('../models');

module.exports = async (modelName, collectionName) => {
  try {
    if (!models[modelName]) {
      throw new Error(`Model ${modelName} does not exist.`);
    }
    const db = mongoose.connection.db;
    let modelExists = await db.listCollections({ name: collectionName }).toArray();
    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
};