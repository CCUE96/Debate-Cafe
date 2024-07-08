const mongoose = require('mongoose');
const db = require('../config/connection');

module.exports = async (collectionName) => {
    console.log("Attempting Database Cleaning");
    try {
        
        await db;
        const database = mongoose.connection.db;
        const collections = await database.listCollections({ name: collectionName }).toArray();
        if (collections.length > 0) {
            await database.dropCollection(collectionName);
            await collection.deleteMany({})
            console.log("Database Successfully Cleaned");
        } else {
            console.log("Collection does not exist, no need to clean.");
        }
    } catch (err) {
        console.error("Error Cleaning Database:", err);
        throw err;
    }
};