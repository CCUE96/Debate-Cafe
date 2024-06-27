const models = require('../models')
const db = require('../config/connection')

module.exports = async (modelName, CollectionName) =>{
    try{
        let modelExists = await models[modelName].db.db.listCollections({
            name:CollectionName
        }).toArray()
       if(modelExists.length){
        await db.dropCollection(collectionName)
       } 
    }catch(err){
        throw err;
    }
}